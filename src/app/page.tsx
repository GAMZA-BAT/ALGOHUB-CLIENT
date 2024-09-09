import Alarm from '@/assets/svgs/IconRaws/icn_alarm.svg';
import AlarmUrl from '@/assets/svgs/IconRaws/icn_alarm.svg?url';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="text-purple">
      <Alarm width={50} height={50} />
      <Image width={50} height={50} src={AlarmUrl} alt='alarm' priority />
      <img width={50} height={50} src={AlarmUrl.src} alt="alarm" />
      <div
        style={{
          width: 50,
          height: 50,
          backgroundImage: `url(${AlarmUrl.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      ></div>
    </div>
  );
}
