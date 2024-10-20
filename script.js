const snowContainer = document.querySelector(".snow-container");

function createSnowflake() {
  const snowflake = document.createElement("div");
  const size = Math.random() * 10 + 5; // Kích thước ngẫu nhiên từ 5 đến 15px
  const left = Math.random() * window.innerWidth; // Vị trí bên trái ngẫu nhiên

  snowflake.classList.add("snow");
  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;
  snowflake.style.left = `${left}px`;

  snowContainer.appendChild(snowflake);

  // Thời gian rơi ngẫu nhiên
  const fallDuration = Math.random() * 3 + 2; // 2 đến 5 giây
  snowflake.style.animationDuration = `${fallDuration}s`;

  // Xóa bông tuyết khi rơi hết
  snowflake.addEventListener("animationend", () => {
    snowflake.remove();
  });
}

// Tạo bông tuyết mỗi 300ms
setInterval(createSnowflake, 300);
