import ReviewCard from '@components/common/ReviewCard/ReviewCard';

export default function Home() {
  return (
    <ReviewCard
      contents={
        '# TCP 슬로우 스타트 14kb rule\n' +
        '* 첫 응답 패킷은 14kb 네트워크 통신의 속도 조절 알고리즘 TCP 슬로우 스타트에 의해 정해진 것\n' +
        '* 슬로우 스타트는 네트워크의 최대 대역폭을 파악할 수 있을 때까지 점진적으로 전송량을 증가시키는것\n' +
        '* 이 방식에 따라 첫 패킷 이후에 2배씩 패킷 사이즈를 증가시킴\n' +
        '* 초기 패킷이 14kb이므로 웹 최적화시 초기 14kb를 염두해야하는 이유\n' +
        '* TCP 슬로우 스타트는 혼잡을 피하기 위해서 네트워크의 용량에 적당한 전송 속도를 찾고자 점진적으로 속도를 높여나가는 방식'
      }
    />
  );
}
