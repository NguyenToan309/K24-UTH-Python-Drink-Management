document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------------
    // ✅ SỬA 1: Xóa /auth khỏi URL để khớp với backend
    // -------------------------------------------------------------------
    const backendURL = 'http://127.0.0.1:4000/api'; 

    // FORM ĐĂNG KÝ (ĐÃ CẬP NHẬT TỰ ĐỘNG ĐĂNG NHẬP)
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();
        const errorBox = document.getElementById('errorMessage');
        const successBox = document.getElementById('successMessage');

        errorBox.textContent = '';
        successBox.textContent = '';

        // (Kiểm tra lỗi form... không đổi)
        if (!username || !email || !password || !confirmPassword) {
            errorBox.textContent = '❌ Vui lòng điền đầy đủ các trường.';
            return;
        }
        if (password !== confirmPassword) {
            errorBox.textContent = '❌ Mật khẩu không khớp.';
            return;
        }
        if (password.length < 6) {
            errorBox.textContent = '❌ Mật khẩu phải có ít nhất 6 ký tự.';
            return;
        }

        try {
            // 1. GỌI API ĐĂNG KÝ
            const response = await fetch(`${backendURL}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password })
            });

            const data = await response.json();

            if (response.ok) {
                // ----------------------------------------------------
                // ⬇️ TÍNH NĂNG MỚI BẮT ĐẦU TỪ ĐÂY ⬇️
                // ----------------------------------------------------
                successBox.textContent = '✅ Đăng ký thành công! Đang tự động đăng nhập...';
                
                // 2. TỰ ĐỘNG GỌI API ĐĂNG NHẬP
                try {
                    const loginResponse = await fetch(`${backendURL}/login`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email, password }) // Dùng email/pass vừa đăng ký
                    });
                    
                    const loginData = await loginResponse.json();
                    
                    if (loginResponse.ok) {
                        // 3. LƯU TOKEN
                        localStorage.setItem('token', loginData.token);
                        
                        // 4. CHUYỂN VÀO TRANG CHỦ
                        setTimeout(() => {
                            window.location.href = 'index.html'; 
                        }, 1000);

                    } else {
                        // Lỗi (hiếm khi xảy ra nếu đăng ký vừa thành công)
                        // Cứ cho họ sang trang login để thử lại
                        errorBox.textContent = 'Đăng ký thành công, nhưng tự động đăng nhập thất bại. Vui lòng đăng nhập thủ công.';
                        setTimeout(() => {
                            window.location.href = 'login.html';
                        }, 2000);
                    }
                } catch (loginErr) {
                    errorBox.textContent = 'Lỗi kết nối khi tự động đăng nhập.';
                    setTimeout(() => {
                        window.location.href = 'login.html';
                    }, 2000);
                }
                // ----------------------------------------------------
                // ⬆️ TÍNH NĂNG MỚI KẾT THÚC TẠI ĐÂY ⬆️
                // ----------------------------------------------------

            } else {
                // Lỗi đăng ký (ví dụ: email đã tồn tại)
                errorBox.textContent = data.message || '❌ Có lỗi xảy ra, vui lòng thử lại.';
            }
        } catch (err) {
            console.error('Lỗi fetch register:', err);
            errorBox.textContent = '❌ Không kết nối được với máy chủ!';
        }
    });
}

    // FORM ĐĂNG NHẬP
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        // -------------------------------------------------------------------
        // ✅ SỬA 3: Thêm logic tự động điền khi trang đăng nhập được tải
        // -------------------------------------------------------------------
        try {
            const registeredEmail = localStorage.getItem('registeredEmail');
            const registeredPassword = localStorage.getItem('registeredPassword');

            if (registeredEmail && registeredPassword) {
                // Tự động điền vào form
                document.getElementById('email').value = registeredEmail;
                document.getElementById('password').value = registeredPassword;

                // Xóa đi để dùng 1 lần
                localStorage.removeItem('registeredEmail');
                localStorage.removeItem('registeredPassword');
            }
        } catch (e) {
            console.warn('Không thể tự động điền form:', e);
        }
        // -------------------------------------------------------------------
        // (Kết thúc Sửa 3)
        // -------------------------------------------------------------------

        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const errorBox = document.getElementById('loginErrorMessage');

            errorBox.textContent = '';

            if (!email || !password) {
                errorBox.textContent = '❌ Vui lòng điền đầy đủ các trường.';
                return;
            }

            try {
                // Gọi đến /api/login (đã sửa ở backendURL)
                const response = await fetch(`${backendURL}/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();

                if (response.ok) {
                    localStorage.setItem('token', data.token);
                    errorBox.textContent = '';
                    alert('🎉 Đăng nhập thành công!');
                    window.location.href = 'index.html';
                } else {
                    errorBox.textContent = data.message || '❌ Sai tài khoản hoặc mật khẩu.';
                }

            } catch (err) {
                console.error('Lỗi fetch login:', err);
                errorBox.textContent = '❌ Không kết nối được với máy chủ!';
            }
        });
    }
});