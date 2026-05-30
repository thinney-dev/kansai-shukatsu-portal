import Image from 'next/image';

export default function SiteLogo() {
  return (
    <div className="flex flex-col items-start">
      <Image 
        src="/images/logo.png" // 先ほど配置したロゴ画像
        alt="関西就活 ロゴ"
        width={150}
        height={50}
        priority
      />
      <p className="text-xs text-gray-500 mt-1">by まねまねタウン Leaders Community</p>
    </div>
  );
}