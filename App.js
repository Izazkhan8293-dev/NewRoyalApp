import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  BackHandler,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import { WebView } from 'react-native-webview';

const SITE_URL = 'https://newroyalele.vercel.app';

export default function App() {
  const webViewRef = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Handle Android hardware back button
  React.useEffect(() => {
    if (Platform.OS !== 'android') return;
    const backAction = () => {
      if (canGoBack && webViewRef.current) {
        webViewRef.current.goBack();
        return true;
      }
      return false;
    };
    const handler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => handler.remove();
  }, [canGoBack]);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#1a1a1a"
        translucent={false}
      />

      {/* Error screen */}
      {hasError && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorIcon}>⚡</Text>
          <Text style={styles.errorTitle}>New Royal Electricals</Text>
          <Text style={styles.errorText}>
            Unable to connect. Please check your internet connection.
          </Text>
          <TouchableOpacity
            style={styles.retryBtn}
            onPress={() => {
              setHasError(false);
              webViewRef.current?.reload();
            }}
          >
            <Text style={styles.retryText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* WebView */}
      {!hasError && (
        <WebView
          ref={webViewRef}
          source={{ uri: SITE_URL }}
          style={styles.webview}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowsBackForwardNavigationGestures={true}
          startInLoadingState={true}
          onNavigationStateChange={(navState) => {
            setCanGoBack(navState.canGoBack);
          }}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          onHttpError={(syntheticEvent) => {
            const { nativeEvent } = syntheticEvent;
            if (nativeEvent.statusCode >= 500) {
              setHasError(true);
            }
          }}
          renderLoading={() => (
            <View style={styles.loadingContainer}>
              <Text style={styles.loadingIcon}>⚡</Text>
              <Text style={styles.loadingTitle}>New Royal Electricals</Text>
              <ActivityIndicator
                size="large"
                color="#f59e0b"
                style={{ marginTop: 24 }}
              />
              <Text style={styles.loadingText}>Est. 1970 · Pennadam</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  webview: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  loadingContainer: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  loadingTitle: {
    color: '#f59e0b',
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  loadingText: {
    color: '#888',
    fontSize: 13,
    marginTop: 12,
    letterSpacing: 1,
  },
  errorContainer: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  errorIcon: {
    fontSize: 56,
    marginBottom: 16,
  },
  errorTitle: {
    color: '#f59e0b',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
  },
  errorText: {
    color: '#aaa',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 28,
  },
  retryBtn: {
    backgroundColor: '#f59e0b',
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 8,
  },
  retryText: {
    color: '#1a1a1a',
    fontSize: 15,
    fontWeight: '700',
  },
});
