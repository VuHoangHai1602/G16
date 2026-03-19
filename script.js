/* Toàn bộ Logic JS Giữ Nguyên Y Hệt Bản Gốc */
var PROVINCES = [
  { name:'Hà Nội',          alias:['ha noi','hn','thu do'],          lat:21.0245, lon:105.8412, region:'Miền Bắc',    type:'Thành phố TW' },
  { name:'Hải Phòng',       alias:['hai phong','hp'],                lat:20.8449, lon:106.6881, region:'Miền Bắc',    type:'Thành phố TW' },
  { name:'Huế',             alias:['hue','thua thien hue'],          lat:16.4637, lon:107.5909, region:'Miền Trung',  type:'Thành phố TW' },
  { name:'Đà Nẵng',         alias:['da nang','dn'],                  lat:16.0544, lon:108.2022, region:'Miền Trung',  type:'Thành phố TW' },
  { name:'TP. Hồ Chí Minh', alias:['ho chi minh','hcm','sai gon','sg','tphcm','saigon'], lat:10.8231, lon:106.6297, region:'Miền Nam', type:'Thành phố TW' },
  { name:'Cần Thơ',         alias:['can tho','ct'],                  lat:10.0452, lon:105.7469, region:'Miền Tây',    type:'Thành phố TW' },
  { name:'Hà Giang',        alias:['ha giang','hg'],                 lat:22.8026, lon:104.9784, region:'Đông Bắc Bộ', type:'Tỉnh' },
  { name:'Cao Bằng',        alias:['cao bang','cb'],                 lat:22.6657, lon:106.2524, region:'Đông Bắc Bộ', type:'Tỉnh' },
  { name:'Bắc Kạn',         alias:['bac kan','bk','bac can'],        lat:22.1474, lon:105.8348, region:'Đông Bắc Bộ', type:'Tỉnh' },
  { name:'Lạng Sơn',        alias:['lang son','ls'],                 lat:21.8537, lon:106.7610, region:'Đông Bắc Bộ', type:'Tỉnh' },
  { name:'Tuyên Quang',     alias:['tuyen quang','tq'],              lat:21.7767, lon:105.2280, region:'Đông Bắc Bộ', type:'Tỉnh' },
  { name:'Thái Nguyên',     alias:['thai nguyen','tn'],              lat:21.5942, lon:105.8480, region:'Đông Bắc Bộ', type:'Tỉnh' },
  { name:'Phú Thọ',         alias:['phu tho','pt'],                  lat:21.3978, lon:105.1978, region:'Đông Bắc Bộ', type:'Tỉnh' },
  { name:'Bắc Giang',       alias:['bac giang','bg'],                lat:21.2820, lon:106.1975, region:'Đông Bắc Bộ', type:'Tỉnh' },
  { name:'Quảng Ninh',      alias:['quang ninh','qn','ha long'],     lat:21.0064, lon:107.2925, region:'Đông Bắc Bộ', type:'Tỉnh' },
  { name:'Hòa Bình',        alias:['hoa binh','hb'],                 lat:20.8131, lon:105.3382, region:'Tây Bắc Bộ',  type:'Tỉnh' },
  { name:'Sơn La',          alias:['son la','sl'],                   lat:21.3256, lon:103.9188, region:'Tây Bắc Bộ',  type:'Tỉnh' },
  { name:'Điện Biên',       alias:['dien bien','db'],                lat:21.3860, lon:103.0231, region:'Tây Bắc Bộ',  type:'Tỉnh' },
  { name:'Lai Châu',        alias:['lai chau','lc'],                 lat:22.3964, lon:103.4580, region:'Tây Bắc Bộ',  type:'Tỉnh' },
  { name:'Lào Cai',         alias:['lao cai','lc2','sapa'],          lat:22.4809, lon:103.9754, region:'Tây Bắc Bộ',  type:'Tỉnh' },
  { name:'Yên Bái',         alias:['yen bai','yb'],                  lat:21.7051, lon:104.9058, region:'Tây Bắc Bộ',  type:'Tỉnh' },
  { name:'Vĩnh Phúc',       alias:['vinh phuc','vp'],                lat:21.3609, lon:105.6048, region:'Đ.Bằng Sông Hồng', type:'Tỉnh' },
  { name:'Bắc Ninh',        alias:['bac ninh','bn'],                 lat:21.1861, lon:106.0763, region:'Đ.Bằng Sông Hồng', type:'Tỉnh' },
  { name:'Hải Dương',       alias:['hai duong','hd'],                lat:20.9373, lon:106.3147, region:'Đ.Bằng Sông Hồng', type:'Tỉnh' },
  { name:'Hưng Yên',        alias:['hung yen','hy'],                 lat:20.6464, lon:106.0511, region:'Đ.Bằng Sông Hồng', type:'Tỉnh' },
  { name:'Thái Bình',       alias:['thai binh','tb'],                lat:20.4464, lon:106.3365, region:'Đ.Bằng Sông Hồng', type:'Tỉnh' },
  { name:'Hà Nam',          alias:['ha nam','hanam'],                lat:20.5835, lon:105.9230, region:'Đ.Bằng Sông Hồng', type:'Tỉnh' },
  { name:'Nam Định',        alias:['nam dinh','nd'],                 lat:20.4338, lon:106.1622, region:'Đ.Bằng Sông Hồng', type:'Tỉnh' },
  { name:'Ninh Bình',       alias:['ninh binh','nb','trang an'],     lat:20.2506, lon:105.9745, region:'Đ.Bằng Sông Hồng', type:'Tỉnh' },
  { name:'Thanh Hóa',       alias:['thanh hoa','th'],                lat:19.8079, lon:105.7785, region:'Bắc Trung Bộ', type:'Tỉnh' },
  { name:'Nghệ An',         alias:['nghe an','na','vinh'],           lat:18.6795, lon:105.6813, region:'Bắc Trung Bộ', type:'Tỉnh' },
  { name:'Hà Tĩnh',         alias:['ha tinh','ht'],                  lat:18.3559, lon:105.9078, region:'Bắc Trung Bộ', type:'Tỉnh' },
  { name:'Quảng Bình',      alias:['quang binh','qb','phong nha'],   lat:17.4867, lon:106.5990, region:'Bắc Trung Bộ', type:'Tỉnh' },
  { name:'Quảng Trị',       alias:['quang tri','qt'],                lat:16.7502, lon:107.1853, region:'Bắc Trung Bộ', type:'Tỉnh' },
  { name:'Quảng Nam',       alias:['quang nam','qnam','hoi an'],     lat:15.5394, lon:108.0191, region:'Nam Trung Bộ', type:'Tỉnh' },
  { name:'Quảng Ngãi',      alias:['quang ngai','qngai'],            lat:15.1214, lon:108.8044, region:'Nam Trung Bộ', type:'Tỉnh' },
  { name:'Bình Định',       alias:['binh dinh','bdinh','quy nhon'],  lat:13.7827, lon:109.2218, region:'Nam Trung Bộ', type:'Tỉnh' },
  { name:'Phú Yên',         alias:['phu yen','py','tuy hoa'],        lat:13.0955, lon:109.3228, region:'Nam Trung Bộ', type:'Tỉnh' },
  { name:'Khánh Hòa',       alias:['khanh hoa','kh','nha trang'],    lat:12.2388, lon:109.1967, region:'Nam Trung Bộ', type:'Tỉnh' },
  { name:'Ninh Thuận',      alias:['ninh thuan','nt','phan rang'],   lat:11.5654, lon:108.9886, region:'Nam Trung Bộ', type:'Tỉnh' },
  { name:'Bình Thuận',      alias:['binh thuan','bthuan','phan thiet','mui ne'], lat:11.0904, lon:108.0717, region:'Nam Trung Bộ', type:'Tỉnh' },
  { name:'Kon Tum',         alias:['kon tum','kt'],                  lat:14.3490, lon:107.9977, region:'Tây Nguyên',   type:'Tỉnh' },
  { name:'Gia Lai',         alias:['gia lai','gl','pleiku'],         lat:13.9784, lon:108.0000, region:'Tây Nguyên',   type:'Tỉnh' },
  { name:'Đắk Lắk',         alias:['dak lak','dl','buon ma thuot','dac lac'], lat:12.7100, lon:108.2378, region:'Tây Nguyên', type:'Tỉnh' },
  { name:'Đắk Nông',        alias:['dak nong','dn2','dac nong'],     lat:12.0046, lon:107.6970, region:'Tây Nguyên',   type:'Tỉnh' },
  { name:'Lâm Đồng',        alias:['lam dong','ldong','da lat','dalat'], lat:11.9404, lon:108.4583, region:'Tây Nguyên', type:'Tỉnh' },
  { name:'Bình Phước',      alias:['binh phuoc','bphuoc'],           lat:11.7512, lon:106.7235, region:'Đông Nam Bộ',  type:'Tỉnh' },
  { name:'Tây Ninh',        alias:['tay ninh','tninh'],              lat:11.3352, lon:106.1099, region:'Đông Nam Bộ',  type:'Tỉnh' },
  { name:'Bình Dương',      alias:['binh duong','bduong'],           lat:11.1428, lon:106.4755, region:'Đông Nam Bộ',  type:'Tỉnh' },
  { name:'Đồng Nai',        alias:['dong nai','dnai','bien hoa'],    lat:11.0686, lon:107.1676, region:'Đông Nam Bộ',  type:'Tỉnh' },
  { name:'Bà Rịa – Vũng Tàu', alias:['ba ria','vung tau','brvt','vt'], lat:10.4114, lon:107.1362, region:'Đông Nam Bộ', type:'Tỉnh' },
  { name:'Long An',         alias:['long an','la'],                  lat:10.6956, lon:106.2431, region:'Miền Tây',     type:'Tỉnh' },
  { name:'Tiền Giang',      alias:['tien giang','tg','my tho'],      lat:10.4493, lon:106.3420, region:'Miền Tây',     type:'Tỉnh' },
  { name:'Bến Tre',         alias:['ben tre','btre'],                lat:10.2433, lon:106.3756, region:'Miền Tây',     type:'Tỉnh' },
  { name:'Trà Vinh',        alias:['tra vinh','tv'],                 lat:9.9477,  lon:106.3455, region:'Miền Tây',     type:'Tỉnh' },
  { name:'Vĩnh Long',       alias:['vinh long','vlong'],             lat:10.2396, lon:105.9672, region:'Miền Tây',     type:'Tỉnh' },
  { name:'Đồng Tháp',       alias:['dong thap','dthap','cao lanh'],  lat:10.4938, lon:105.6882, region:'Miền Tây',     type:'Tỉnh' },
  { name:'An Giang',        alias:['an giang','ag','chau doc','long xuyen'], lat:10.5216, lon:105.1259, region:'Miền Tây', type:'Tỉnh' },
  { name:'Kiên Giang',      alias:['kien giang','kg','phu quoc','rach gia'], lat:10.0125, lon:105.0809, region:'Miền Tây', type:'Tỉnh' },
  { name:'Hậu Giang',       alias:['hau giang','hgiang','vi thanh'], lat:9.7578,  lon:105.6413, region:'Miền Tây',     type:'Tỉnh' },
  { name:'Sóc Trăng',       alias:['soc trang','strang'],            lat:9.6003,  lon:105.9800, region:'Miền Tây',     type:'Tỉnh' },
  { name:'Bạc Liêu',        alias:['bac lieu','blieu'],              lat:9.2941,  lon:105.7278, region:'Miền Tây',     type:'Tỉnh' },
  { name:'Cà Mau',          alias:['ca mau','cmau'],                 lat:9.1769,  lon:105.1524, region:'Miền Tây',     type:'Tỉnh' },
];

function stripDiacritics(s) {
  return (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[đĐ]/g, function(c){ return c === 'đ' ? 'd' : 'D'; }).toLowerCase().trim();
}

function searchProvinces(rawQuery) {
  var q = stripDiacritics(rawQuery);
  if (!q || q.length < 1) return [];
  var results = [];
  PROVINCES.forEach(function(p) {
    var stripped = stripDiacritics(p.name);
    var score = 0;
    if (stripped === q) { score = 100; }
    else if (stripped.startsWith(q)) { score = 80; }
    else if (stripped.split(' ').some(function(w){ return w.startsWith(q); })) { score = 70; }
    else if (stripped.includes(q)) { score = 50; }
    if (!score) {
      p.alias.forEach(function(a) {
        var sa = stripDiacritics(a);
        if (sa === q) { score = Math.max(score, 60); }
        else if (sa.startsWith(q)) { score = Math.max(score, 55); }
        else if (sa.includes(q)) { score = Math.max(score, 40); }
      });
    }
    if (score > 0) results.push({ province: p, score: score });
  });
  results.sort(function(a, b) { return b.score - a.score; });
  return results.map(function(r) { return r.province; });
}

var geoAbort = null;
var geoDebounceTimer = null;
function fetchGeoSearch(query) {
  return new Promise(function(resolve) {
    var q = (query || '').trim();
    if (q.length < 2) { resolve([]); return; }
    var url = 'https://api.openweathermap.org/geo/1.0/direct?q=' + encodeURIComponent(q + ', Vietnam') + '&limit=8&appid=' + API_KEY;
    if (geoAbort) geoAbort.abort();
    geoAbort = new AbortController();
    fetch(url, { signal: geoAbort.signal })
      .then(function(r) { return r.json(); })
      .then(function(arr) {
        if (!Array.isArray(arr)) { resolve([]); return; }
        var list = arr.map(function(item) {
          var region = (item.state || item.country || 'Việt Nam');
          var name = item.name + (item.state && item.state !== item.name ? ', ' + item.state : '');
          return { name: name, lat: item.lat, lon: item.lon, region: region, type: 'Khu vực' };
        });
        resolve(list);
      })
      .catch(function() { resolve([]); });
  });
}
function samePlace(a, b) { return Math.abs((a.lat - b.lat)) < 0.02 && Math.abs((a.lon - b.lon)) < 0.02; }

function highlightMatch(name, query) {
  var sq = stripDiacritics(query);
  var sn = stripDiacritics(name);
  var idx = sn.indexOf(sq);
  if (idx < 0 || !sq) return escHtml(name);
  return escHtml(name.slice(0, idx)) + '<mark>' + escHtml(name.slice(idx, idx + sq.length)) + '</mark>' + escHtml(name.slice(idx + sq.length));
}
function escHtml(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

var ddEl   = document.getElementById('search-dropdown');
var inputEl= document.getElementById('search-input');
var ddList = [];  
var ddActive = -1;

function showDropdown(html) { ddEl.innerHTML = html; ddEl.style.display = 'block'; }
function hideDropdown() { ddEl.style.display = 'none'; ddEl.innerHTML = ''; ddActive = -1; ddList = []; }
function renderResults(provinces, query) {
  if (!provinces.length) { showDropdown('<div class="dd-empty">Oops! Không tìm thấy địa điểm này 🥺</div>'); ddList = []; return; }
  ddList = provinces;
  var html = provinces.map(function(p, i) {
    return '<div class="dd-item" data-idx="' + i + '"><span class="dd-flag">📍</span><div class="dd-texts"><div class="dd-main">' + highlightMatch(p.name, query) + '</div><div class="dd-region">' + escHtml(p.region) + '</div></div><span class="dd-badge">' + escHtml(p.type) + '</span></div>';
  }).join('');
  showDropdown(html);
  ddEl.querySelectorAll('.dd-item').forEach(function(el) {
    el.addEventListener('mousedown', function(e) { e.preventDefault(); selectProvince(parseInt(el.getAttribute('data-idx'))); });
  });
}

function updateActive() {
  ddEl.querySelectorAll('.dd-item').forEach(function(el, i) {
    el.classList.toggle('active', i === ddActive);
    if (i === ddActive) el.scrollIntoView({ block: 'nearest' });
  });
}

function selectProvince(idx) {
  var p = ddList[idx];
  if (!p) return;
  inputEl.value = p.name;
  hideDropdown();
  goToAndFetch(p.lat, p.lon, p.name + ' — ' + p.region, p.name);
}

inputEl.addEventListener('keydown', function(e) {
  if (ddEl.style.display === 'none') return;
  var len = ddList.length;
  if (e.key === 'ArrowDown') { e.preventDefault(); ddActive = (ddActive + 1) % len; updateActive(); } 
  else if (e.key === 'ArrowUp') { e.preventDefault(); ddActive = (ddActive - 1 + len) % len; updateActive(); } 
  else if (e.key === 'Enter') { e.preventDefault(); if (ddActive >= 0) { selectProvince(ddActive); } else if (ddList.length === 1) { selectProvince(0); } else { doSearch(); } } 
  else if (e.key === 'Escape') { hideDropdown(); }
});

inputEl.addEventListener('input', function() {
  var q = inputEl.value.trim();
  ddActive = -1;
  if (q.length < 1) { hideDropdown(); return; }
  var results = searchProvinces(q);
  if (geoDebounceTimer) clearTimeout(geoDebounceTimer);
  renderResults(results, q);
  if (q.length >= 2) {
    geoDebounceTimer = setTimeout(function() {
      geoDebounceTimer = null;
      var currentQuery = q;
      fetchGeoSearch(q).then(function(geoList) {
        if (inputEl.value.trim() !== currentQuery) return;
        var provinceOnly = searchProvinces(currentQuery);
        var combined = provinceOnly.slice();
        geoList.forEach(function(g) {
          var dup = combined.some(function(c) { return samePlace(c, g) || stripDiacritics(c.name) === stripDiacritics(g.name); });
          if (!dup) combined.push(g);
        });
        renderResults(combined, currentQuery);
      });
    }, 400);
  }
});

document.addEventListener('click', function(e) { if (!e.target.closest('.search-section')) hideDropdown(); });

function doSearch() {
  var q = inputEl.value.trim();
  if (!q) return;
  var results = searchProvinces(q);
  if (results.length > 0) { selectProvince(0); } 
  else {
    fetchGeoSearch(q).then(function(geoList) {
      if (geoList.length > 0) { renderResults(geoList, q); } 
      else { hideDropdown(); document.getElementById('weather-desc').textContent = 'Không tìm thấy kết quả'; document.getElementById('wc-emoji').textContent = '🧐'; }
    });
  }
}

var VN_BOUNDS = L.latLngBounds( L.latLng(8.18, 102.14), L.latLng(23.39, 109.46) );
var HCM = [10.8231, 106.6297];
var API_KEY = "bf2a6b7f64786f0f06ec482f8bff0397";

var map = L.map('map', { zoomControl: false, maxBounds: VN_BOUNDS, maxBoundsViscosity: 1.0, minZoom: 5, maxZoom: 18 }).setView([16.5, 106.3], 6);
L.control.zoom({ position: 'bottomright' }).addTo(map);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OSM', bounds: VN_BOUNDS }).addTo(map);

var currentMarker = L.marker(HCM).addTo(map).bindPopup('<b>TP. Hồ Chí Minh</b>').openPopup();

map.on('click', function(e) {
  if (!VN_BOUNDS.contains(e.latlng)) return;
  var lat = e.latlng.lat, lon = e.latlng.lng;
  var lb = lat.toFixed(4) + '°N, ' + lon.toFixed(4) + '°E';
  goToAndFetch(lat, lon, lb, lb);
});

function getEmoji(id) {
  if (!id) return '🌡';
  if (id >= 200 && id < 300) return '⛈';
  if (id >= 300 && id < 400) return '🌦';
  if (id >= 500 && id < 511) return '🌧';
  if (id === 511) return '🌨';
  if (id > 511 && id < 600) return '🌧';
  if (id >= 600 && id < 700) return '❄️';
  if (id >= 700 && id < 800) return '🌫';
  if (id === 800) return '☀️';
  if (id === 801) return '🌤';
  if (id === 802) return '⛅';
  if (id >= 803) return '☁️';
  return '🌡';
}
function formatDay(dt) {
  var d = new Date(dt * 1000);
  return ['CN','T2','T3','T4','T5','T6','T7'][d.getDay()] + ' ' + d.getDate() + '/' + (d.getMonth()+1);
}

function fetchWeather(lat, lon) {
  document.getElementById('temp-display').textContent = '--';
  document.getElementById('weather-desc').textContent = 'Đang tải...';
  document.getElementById('wc-emoji').style.opacity = '0.4';
  fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+API_KEY+'&units=metric&lang=vi')
    .then(function(r){return r.json();})
    .then(function(d){
      document.getElementById('wc-emoji').style.opacity = '1';
      if (d.cod === 200) {
        document.getElementById('temp-display').textContent = Math.round(d.main.temp);
        var desc = (d.weather[0].description||''); desc = desc.charAt(0).toUpperCase()+desc.slice(1);
        document.getElementById('weather-desc').textContent = desc;
        document.getElementById('wc-emoji').textContent = getEmoji(d.weather[0].id);
        document.getElementById('humidity').textContent = d.main.humidity??'--';
        document.getElementById('wind-speed').textContent = d.wind&&d.wind.speed!=null?d.wind.speed:'--';
        document.getElementById('feels-like').textContent = d.main.feels_like!=null?Math.round(d.main.feels_like):'--';
        document.getElementById('pressure').textContent = d.main.pressure??'--';
        if (typeof d.dt==='number') {
          var tz=typeof d.timezone==='number'?d.timezone:0;
          var loc=new Date((d.dt+tz)*1000);
          document.getElementById('updated-at').textContent = loc.getUTCHours().toString().padStart(2,'0')+':'+loc.getUTCMinutes().toString().padStart(2,'0');
        }
      } else {
        document.getElementById('weather-desc').textContent = d.message||'Lỗi tải dữ liệu';
        document.getElementById('wc-emoji').textContent = '⚠️';
      }
    }).catch(function(){
      document.getElementById('weather-desc').textContent='Lỗi kết nối';
      document.getElementById('wc-emoji').style.opacity='1';
    });
}

function fetchForecast(lat, lon) {
  var fl = document.getElementById('forecast-list');
  fl.innerHTML = '<div class="skeleton" style="height:64px"></div><div class="skeleton" style="height:64px"></div><div class="skeleton" style="height:64px"></div><div class="skeleton" style="height:64px"></div><div class="skeleton" style="height:64px"></div>';
  fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&appid='+API_KEY+'&units=metric&lang=vi')
    .then(function(r){return r.json();})
    .then(function(data){
      if (!data.list||!data.list.length){fl.innerHTML='<div style="color:var(--text-muted);font-size:13px;padding:12px">Không có dữ liệu</div>';return;}
      var byDay={};
      data.list.forEach(function(item){
        var k=item.dt_txt.slice(0,10);
        if(!byDay[k]) byDay[k]={dt:item.dt,desc:item.weather[0].description,temps:[],iconId:item.weather[0].id};
        byDay[k].temps.push(item.main.temp);
        byDay[k].desc=item.weather[0].description;
        byDay[k].iconId=item.weather[0].id;
      });
      var html='';
      Object.keys(byDay).slice(0,5).forEach(function(k,i){
        var day=byDay[k];
        var mn=Math.round(Math.min.apply(null,day.temps));
        var mx=Math.round(Math.max.apply(null,day.temps));
        var desc=(day.desc||'');desc=desc.charAt(0).toUpperCase()+desc.slice(1);
        html+='<div class="forecast-day" style="animation-delay:'+(0.06*i)+'s"><span class="fd-day">'+formatDay(day.dt)+'</span><span class="fd-icon">'+getEmoji(day.iconId)+'</span><span class="fd-desc">'+desc+'</span><span class="fd-temps"><span class="fd-max">'+mx+'°</span><span class="fd-min">/ '+mn+'°</span></span></div>';
      });
      fl.innerHTML=html;
    }).catch(function(){
      fl.innerHTML='<div style="color:var(--text-muted);font-size:13px;padding:12px">Không tải được dự báo</div>';
    });
}

function goToAndFetch(lat, lon, fullLabel, shortLabel) {
  map.setView([lat, lon], 10);
  map.removeLayer(currentMarker);
  currentMarker = L.marker([lat,lon]).addTo(map).bindPopup('<b>'+escHtml(shortLabel||fullLabel||'Đã chọn')+'</b>').openPopup();
  document.getElementById('wc-location-label').textContent = fullLabel || shortLabel || (lat.toFixed(4)+', '+lon.toFixed(4));
  document.getElementById('wc-city').textContent = shortLabel || 'Vị trí đã chọn';
  fetchWeather(lat, lon);
  fetchForecast(lat, lon);
}

(function(){
  var d=new Date();
  var days=['Chủ nhật','Thứ hai','Thứ ba','Thứ tư','Thứ năm','Thứ sáu','Thứ bảy'];
  document.getElementById('header-date').textContent=days[d.getDay()]+', '+d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear();
})();

fetchWeather(HCM[0], HCM[1]);
fetchForecast(HCM[0], HCM[1]);