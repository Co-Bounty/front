interface PostProps {
  params: { postId: string };
}
export default function Post({ params }: PostProps) {
  return <div>{params.postId}</div>;
}
