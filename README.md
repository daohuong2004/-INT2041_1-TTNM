<<<<<<< HEAD
# README - Ứng dụng SignPal	

## Giới thiệu

Đây là repo GitHub cho bài tập lớn môn **Tương tác người máy**.

**Mã môn học**: [INT2041 1]  
**Nhóm**: 6
**Chủ đề**: Xây dựng ứng dụng SignPal - Dịch và học ngôn ngữ ký hiệu

### Thành viên
- **Đào Thị Thu Hường** - MSV: 22028292
- **Nguyễn Thu Hà** - MSV: 22028282
- **Lê Minh Dương** - MSV: 22028283

## Mục tiêu
- Cung cấp giải pháp hỗ trợ giao tiếp cho người khiếm thính và người câm điếc.
- Xây dựng một hệ thống dịch ngôn ngữ ký hiệu và ngôn ngữ tự nhiên (văn bản, giọng nói).
- Tạo nền tảng học ngôn ngữ ký hiệu thông qua từ điển, game và các bài học tương tác.

## Hướng dẫn cài đặt và sử dụng
cd vào thư mục <code>-INT2041_1-TTNM</code>

### Chạy frontend bằng lệnh dưới 
```
cd client
npm install
npm start
```
### Chạy backend
Áp dụng chạy py 3.10 đổ xuống vì TensorFlow không hỗ trợ Python 3.10 và các phiên bản cao hơn.
Để cài đặt môi trường 
```
cd server
pip install -r requirements.tx
Nếu không được thì pip install lần lượt như sau 
ví dụ 
```
pip install flask
pip install flask-cors
pip install tensorflow
```
[tensorflow
tensorflowjs
opencv-contrib-python
mediapipe // Khi install có khả năng bị lỗi  vì mediapipe KHÔNG tương thích với numpy 2.0.2  nên cần cài numpy phiên bản ổn định (1.26.4)
scikit-learn //
matplotlib
pandas
flask
flask_cors
pose_format
googletrans]

Để Run server
py data-processing/app.py




