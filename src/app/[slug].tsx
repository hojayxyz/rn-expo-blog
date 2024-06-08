import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';
import { getPost } from '../repository/postRepository';
import { useState } from 'react';

const PostDetailsPage = () => {
  const { slug } = useLocalSearchParams();
  const [post, setPost] = useState(getPost(slug));

  if (!post) {
    return <Text>Post Not Found!</Text>;
  }

  return (
    <View>
      <Text>{post.title}</Text>
    </View>
  );
};
export default PostDetailsPage;
