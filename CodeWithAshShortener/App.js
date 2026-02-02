import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { registerRootComponent } from 'expo';
import * as Clipboard from 'expo-clipboard';
import * as Sharing from 'expo-sharing';
import React, { useEffect, useState } from 'react';
import {
    Alert,
    FlatList,
    Image,
    Modal,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';


const STORAGE_KEY = '@shortened_urls';

export default function App() {
    const [longUrl, setLongUrl] = useState('');
    const [urls, setUrls] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedUrl, setSelectedUrl] = useState(null);
    const [showQR, setShowQR] = useState(false);

    useEffect(() => {
        loadUrls();
    }, []);

    const loadUrls = async () => {
        try {
            const stored = await AsyncStorage.getItem(STORAGE_KEY);
            if (stored) {
                const parsedUrls = JSON.parse(stored);
                setUrls(parsedUrls);
            }
        } catch (error) {
            console.error('Load error:', error);
        }
    };

    const saveUrls = async (newUrls) => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newUrls));
            setUrls(newUrls);
        } catch (error) {
            console.error('Save error:', error);
        }
    };

    const shortenUrl = async () => {
        if (!longUrl.trim()) {
            Alert.alert('Error', 'Enter a URL first! 🔗');
            return;
        }

        setLoading(true);

        try {
            // TinyURL API - No token needed!
            const response = await axios.get(
                `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`
            );

            const newUrl = {
                id: Date.now().toString(),
                original: longUrl,
                shortened: response.data, // TinyURL returns the short URL directly
                clicks: 0,
                createdAt: new Date().toISOString(),
            };

            const updatedUrls = [newUrl, ...urls];
            await saveUrls(updatedUrls);
            setLongUrl('');
            Alert.alert('Success! ✨', 'URL shortened!');
        } catch (error) {
            Alert.alert('Error', 'Failed to shorten URL. Try again! ⚠️');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

};

const copyToClipboard = async (url) => {
    await Clipboard.setStringAsync(url);
    Alert.alert('Copied! 📋', url);
};

const shareUrl = async (url) => {
    try {
        const isAvailable = await Sharing.isAvailableAsync();
        if (isAvailable) {
            await Sharing.shareAsync(url);
        } else {
            await Clipboard.setStringAsync(url);
            Alert.alert('Copied! 📋', 'Sharing not available, copied to clipboard');
        }
    } catch (error) {
        console.error('Share error:', error);
    }
};

const incrementClick = async (id) => {
    const updatedUrls = urls.map(url =>
        url.id === id ? { ...url, clicks: url.clicks + 1 } : url
    );
    await saveUrls(updatedUrls);
};

const showQRCode = (url) => {
    setSelectedUrl(url);
    setShowQR(true);
};

const deleteUrl = async (id) => {
    Alert.alert('Delete?', 'Remove this link?', [
        { text: 'Cancel', style: 'cancel' },
        {
            text: 'Delete',
            style: 'destructive',
            onPress: async () => {
                const updated = urls.filter((u) => u.id !== id);
                await saveUrls(updated);
            },
        },
    ]);
};

const renderItem = ({ item }) => (
    <View style={styles.urlCard}>
        <TouchableOpacity
            style={styles.urlInfo}
            onPress={() => {
                incrementClick(item.id);
                copyToClipboard(item.shortened);
            }}
        >
            <Text style={styles.shortUrl}>{item.shortened}</Text>
            <Text style={styles.longUrl} numberOfLines={1}>
                {item.original}
            </Text>
            <View style={styles.clickCountContainer}>
                <Ionicons name="finger-print" size={12} color="#4a9eff" />
                <Text style={styles.clickCount}> {item.clicks} clicks</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.actions}>
            <TouchableOpacity
                style={styles.btnQR}
                onPress={() => showQRCode(item.shortened)}
            >
                <Ionicons name="qr-code" size={20} color="#00ffaa" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btnShare}
                onPress={() => shareUrl(item.shortened)}
            >
                <Ionicons name="share-social" size={20} color="#4a9eff" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btnCopy}
                onPress={() => copyToClipboard(item.shortened)}
            >
                <Ionicons name="copy" size={20} color="#00ffaa" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btnDelete}
                onPress={() => deleteUrl(item.id)}
            >
                <Ionicons name="trash" size={20} color="#fff" />
            </TouchableOpacity>
        </View>
    </View>
);

return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.header}>
            <Image
                source={require('./assets/images/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.title}>CodeWithAsh</Text>
            <Text style={styles.subtitle}>URL Shortener ⚡</Text>
        </View>

        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Paste your long URL here..."
                placeholderTextColor="#666"
                value={longUrl}
                onChangeText={setLongUrl}
                autoCapitalize="none"
                keyboardType="url"
            />
            <TouchableOpacity
                style={[styles.btnShorten, loading && styles.btnDisabled]}
                onPress={shortenUrl}
                disabled={loading}
            >
                <Text style={styles.btnShortenText}>
                    {loading ? '⏳' : 'Shorten 🚀'}
                </Text>
            </TouchableOpacity>
        </View>

        <FlatList
            data={urls}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={styles.list}
            ListEmptyComponent={
                <Text style={styles.emptyText}>
                    No links yet! Start shortening 🔗
                </Text>
            }
        />

        <Modal
            visible={showQR}
            transparent={true}
            animationType="fade"
            onRequestClose={() => setShowQR(false)}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.qrContainer}>
                    <Text style={styles.qrTitle}>QR Code 📱</Text>
                    {selectedUrl && (
                        <QRCode
                            value={selectedUrl}
                            size={250}
                            backgroundColor="white"
                            color="#000000"
                        />
                    )}
                    <Text style={styles.qrUrl}>{selectedUrl}</Text>
                    <TouchableOpacity
                        style={styles.btnCloseQR}
                        onPress={() => setShowQR(false)}
                    >
                        <Text style={styles.btnCloseText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    header: {
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#00ffaa', // ← Keep teal
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 12,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#00ffaa', // ← Changed to teal (was lime)
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 16,
        color: '#888', // ← Gray
    },
    inputContainer: {
        padding: 20,
    },
    input: {
        backgroundColor: '#1a1a1a',
        color: '#fff',
        padding: 16,
        borderRadius: 12,
        fontSize: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#333',
    },
    btnShorten: {
        backgroundColor: '#00ffaa', // ← Teal button (was lime)
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    btnShortenText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    btnDisabled: {
        opacity: 0.5,
    },
    list: {
        flex: 1,
        paddingHorizontal: 20,
    },
    urlCard: {
        backgroundColor: '#1a1a1a',
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#333',
    },
    urlInfo: {
        marginBottom: 12,
    },
    shortUrl: {
        color: '#00ffaa', // ← Teal
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    longUrl: {
        color: '#666',
        fontSize: 12,
        marginBottom: 4,
    },
    clickCountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    clickCount: {
        color: '#4a9eff', // ← Blue accent
        fontSize: 12,
    },
    actions: {
        flexDirection: 'row',
        gap: 8,
    },
    btnQR: {
        backgroundColor: '#2a2a2a',
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#00ffaa', // ← Teal border
    },
    btnShare: {
        backgroundColor: '#2a2a2a',
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#4a9eff', // ← Blue border
    },
    btnCopy: {
        backgroundColor: '#2a2a2a',
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#00ffaa', // ← Teal border
    },
    btnDelete: {
        backgroundColor: '#ff0055', // ← Hot pink (keeps contrast)
        padding: 10,
        borderRadius: 8,
    },
    btnText: {
        fontSize: 18,
    },
    emptyText: {
        color: '#666',
        textAlign: 'center',
        marginTop: 40,
        fontSize: 16,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    qrContainer: {
        backgroundColor: '#1a1a1a',
        padding: 30,
        borderRadius: 20,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#00ffaa', // ← Teal border
    },
    qrTitle: {
        color: '#00ffaa', // ← Teal (was lime)
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    qrUrl: {
        color: '#4a9eff', // ← Blue accent
        fontSize: 14,
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
    btnCloseQR: {
        backgroundColor: '#00ffaa', // ← Teal (was lime)
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 12,
    },
    btnCloseText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

registerRootComponent(App);