import { View, Text, ScrollView } from 'react-native';
import { useState } from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import { getAllPosts, getPost } from '../repository/postRepository';
import Markdown from 'react-native-markdown-display';
import Head from 'expo-router/head';

export async function generateStaticParams(): Promise<
  Record<string, string>[]
> {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

const PostDetailsPage = () => {
  const { slug } = useLocalSearchParams();
  const [post, setPost] = useState(getPost(slug));

  if (!post) {
    return <Text>Post Not Found!</Text>;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}
        contentContainerStyle={{
          maxWidth: 960,
          width: '100%',
          marginHorizontal: 'auto',
          padding: 20,
        }}
      >
        <Stack.Screen options={{ title: post.title }} />
        <Text>{post.title}</Text>
        <Markdown>{post.content}</Markdown>
      </ScrollView>
    </>
  );
};
export default PostDetailsPage;
