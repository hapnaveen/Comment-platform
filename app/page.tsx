import CommentInput from '@/components/CommentInput';
import CommentList from '@/components/CommentList';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto md:p-24 grid gap-4">
      <h1 className="text-2xl font-bold mb-4">Comment Section</h1>
      <CommentList />
      <CommentInput />
    </div>
  );
};

export default Home;
