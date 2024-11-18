function copyCurrentPostLink() {
  const postUrl = window.location.href;
  navigator.clipboard
    .writeText(postUrl)
    .then(() => {
      alert("현재 글 링크가 복사되었습니다.");
    })
    .catch((err) => {
      console.error("링크 복사에 실패하였습니다.\n에러:", err);
    });
}
