import { FlatList, StyleSheet, Text, View } from 'react-native';
import { getAllPosts } from '../repository/postRepository';
import { useState } from 'react';
import { Link } from 'expo-router';

export default function Page() {
  // const posts = getAllPosts();
  const [posts, setPosts] = useState(getAllPosts());

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <FlatList
          data={posts}
          contentContainerStyle={{ gap: 20 }}
          renderItem={({ item }) => (
            <Link
              href={`/${item.slug}`}
              style={{ fontSize: 16, fontWeight: '500' }}
            >
              {item.title}
            </Link>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    padding: 24,
  },
  main: {
    flex: 1,
    maxWidth: 960,
    width: '100%',
    marginHorizontal: 'auto',
  },
});
