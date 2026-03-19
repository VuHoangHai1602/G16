import requests
import sys

API_KEY = "bf2a6b7f64786f0f06ec482f8bff0397"  # thay bằng API key của bạn

def lay_thoi_tiet(lat, lon):
    url = "https://api.openweathermap.org/data/2.5/weather"
    
    params = {
        "lat": lat,
        "lon": lon,
        "appid": API_KEY,
        "units": "metric",   # lấy nhiệt độ theo độ C
        "lang": "vi"         # mô tả thời tiết bằng tiếng Việt
    }

    response = requests.get(url, params=params)
    data = response.json()

    nhiet_do = data["main"]["temp"]
    tinh_trang = data["weather"][0]["description"]

    return f"{nhiet_do} độ C, {tinh_trang}"


# chạy thử
if __name__ == "__main__":
    # Ensure Windows console can print Vietnamese prompts safely
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

    lat = float(input("Nhap vi do: "))
    lon = float(input("Nhap kinh do: "))

    ket_qua = lay_thoi_tiet(lat, lon)
    print(ket_qua)
