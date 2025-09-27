document.addEventListener("DOMContentLoaded", () => {
  // Hiển thị giỏ hàng trong trang đặt hàng
  let orderList = document.getElementById("order-list");
  let orderTotal = document.getElementById("order-total");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price.toLocaleString()}đ x ${item.quantity}`;
    orderList.appendChild(li);
  });
  orderTotal.textContent = total.toLocaleString();

  // Xử lý form đặt hàng
  document.getElementById("order-form").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("customer-name").value.trim();
    let phone = document.getElementById("customer-phone").value.trim();
    let address = document.getElementById("customer-address").value.trim();
    let payment = document.getElementById("customer-payment").value;

    if (!name || !phone || !address) {
      showToast("❌ Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    // Lưu thông tin đơn hàng (nếu cần)
    // ...

    // Hiện thông báo đặt hàng thành công
    showToast("🎉 Đặt hàng thành công!");

    // Xóa giỏ hàng
    localStorage.removeItem("cart");
    setTimeout(() => {
      window.location.href = "index.html"; // chuyển về trang chủ
    }, 2000);
  });
});

// Hàm hiển thị toast
function showToast(message) {
  let toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "show";
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}
