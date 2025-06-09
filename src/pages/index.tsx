import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="cover" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <img src='/favicon.ico' alt='icon' />
      <h1>xuwanwan的个人博客</h1>
      <p>我是虚玩玩 与君共勉</p>
      <p><Link href='/posts'>文章列表</Link></p>
    </div>
  );
};

export default Home;
