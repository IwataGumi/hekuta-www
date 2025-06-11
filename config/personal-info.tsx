import React from "react";
import { AiOutlinePython } from "react-icons/ai";
import {
  FaBook,
  FaCode,
  FaGithub,
  FaInstagram,
  FaJava,
  FaMusic
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoPython } from "react-icons/io5";
import { SiZenn } from "react-icons/si";

// パーソナル情報の型定義
export interface PersonalInfo {
  // 基本情報
  name: string;
  title: string;
  location: string;
  avatarImage?: string;
  initials: string;
  description?: string;
  
  // About Me
  about: {
    paragraphs: React.ReactNode[];
  };
  
  // Tech Stack
  techStack: {
    name: string;
    icon: React.ReactNode;
  }[];
  
  // 趣味・興味
  hobbies: {
    title: string;
    description: string;
    icon: React.ReactNode;
    badges: string[];
  }[];
  
  // 教育歴
  education: {
    period: string;
    school: string;
    description: string;
    badges: string[];
    link?: string;
  }[];
  
  // ソーシャルリンク
  socialLinks: {
    platform: string;
    url: string;
    icon: React.ReactNode;
  }[];
}

// あなたのパーソナル情報をここで編集してください
export const personalInfo: PersonalInfo = {
  // 基本情報
  name: "広瀬 エイトル",
  title: "学生エンジニア",
  location: "Tokyo, Japan",
  avatarImage: "avatar.jpg", // 画像を追加したい場合はpublicフォルダに配置
  initials: "H H", // アバター画像がない場合に表示されるイニシャル

  // About Me セクション
  about: {
    paragraphs: [
      <>おはよう世界。おれは天才だ。</>,
      <><span style={{color: 'red'}}>広瀬エイトル</span>です。</>,
      ]
  },
  
  // 技術スタック
  techStack: [
    { name: "Python", icon: <AiOutlinePython className="w-3 h-3 mr-1" /> },
    { name: "Pyhton 2.0", icon: <IoLogoPython className="w-3 h-3 mr-1" /> },
    { name: "Java", icon: <FaJava className="w-3 h-3 mr-1" /> }
  ],
  
  // 趣味・興味
  hobbies: [
    {
      title: "Learning & Reading",
      description: "技術書やPodcastでのインプット、QiitaやZennでのアウトプットを継続",
      icon: <FaBook className="h-5 w-5 text-primary" />,
      badges: ["Clean Code", "Podcast"]
    },
    {
      title: "Development & Design",
      description: "React/Next.jsでの個人プロジェクト、UI/UX設計、新技術の実験と検証",
      icon: <FaCode className="h-5 w-5 text-primary" />,
      badges: ["React", "UI/UX"]
    },
    {
      title: "Music & Entertainment",
      description: "コーディング用BGM、Webゲームでの参考収集、技術系コンテンツの視聴",
      icon: <FaMusic className="h-5 w-5 text-primary" />,
      badges: ["Lo-Fi", "Gaming"]
    }
  ],
  
  // 教育歴
  education: [
    {
      period: "2024 — 現在",
      school: "東京工科大学 コンピュータサイエンス学部",
      description: "プログラミングやWeb開発について学習中。特にフロントエンド技術に興味を持って取り組んでいます。授業以外でも自主的に様々な技術を学び、実際にプロジェクトを作りながらスキルを向上させています。",
      badges: ["コンピュータサイエンス学科", "人工知能専攻", "学部長賞"],
      link: "https://example.com" // 学校のウェブサイトなど（オプション）
    },
    {
      period: "2021 — 2024",
      school: "○○高等学校",
      description: "○○部で活動していました。チームワークやリーダーシップを学び、問題解決能力を養いました。高校時代からコンピューターに興味を持ち始め、プログラミングの基礎を独学で学んでいました。",
      badges: ["リーダーシップ", "チームワーク", "独学"]
    }
  ],
  
  // ソーシャルリンク
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/yourusername", // あなたのGitHubのURLに変更してください
      icon: <FaGithub className="size-6" />
    },
    {
      platform: "X (Twitter)",
      url: "https://x.com/yourusername", // あなたのX(Twitter)のURLに変更してください
      icon: <FaXTwitter className="size-6" />
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/yourusername", // あなたのInstagramのURLに変更してください
      icon: <FaInstagram className="size-6" />
    },
    {
        platform: "Zenn",
        url: "https://zenn.dev/yourusername", // あなたのZennのURLに変更してください
        icon: <SiZenn className="size-6" />
    }
  ]
}; 