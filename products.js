const products = [
    {
        id: "nb01",
        name: "ASUS ROG Strix G15",
        category: "筆電",
        specs: [
            {
                label: "i9/32GB/1TB",
                price: 69999,
                img: "ProductImages/ROG Flow Z13 (2025) GZ302.webp",
                desc: "記憶體：最大容量32GB"
            },
            {
                label: "i9/128GB/1TB",
                price: 84999,
                img: "ProductImages/ROG Flow Z13 (2025) GZ302.webp",
                desc: "記憶體：最大容量128GB"
            }
        ]
    },
    {
        id: "nb02",
        name: "ROG Strix SCAR 16 (2025) G635",
        category: "筆電",
        specs: [
            {
                label: "NVIDIA® GeForce RTX™ 5070 Ti",
                price: 77999,
                img: "ProductImages/ROG Strix SCAR 16 (2025) G635.webp",
                desc: "顯示卡：NVIDIA® GeForce RTX™ 5070 Ti Laptop GPU ROG Boost: 1565MHz* at 140W (1515MHz Boost Clock+50MHz OC, 115W+25W Dynamic Boost) 12GB GDDR7"
            },
            {
                label: "NVIDIA® GeForce RTX™ 5080",
                price: 97999,
                img: "ProductImages/ROG Strix SCAR 16 (2025) G635.webp",
                desc: "顯示卡：NVIDIA® GeForce RTX™ 5080 Laptop GPU ROG Boost: 1550MHz* at 175W (1500MHz Boost Clock+50MHz OC, 150W+25W Dynamic Boost) 16GB GDDR7"
            }
        ]
    },
    {
        id: "mon01",
        name: "ROG Strix OLED XG27ACDNG",
        category: "顯示器",
        specs: [
            {
                label: "27\" 144Hz",
                price: 26900,
                img: "ProductImages/ROG Strix OLED XG27ACDNG.webp",
                desc: "ROG Strix OLED XG27ACDNG 電競顯示器 ― 27 吋 (26.5 吋可視)、 1440p QD-OLED 面板、 360 Hz、0.03 ms、特製散熱技術、ASUS OLED Care+、OLED 防閃爍、均勻亮度、G-SYNC® 相容、99% DCI-P3 及 DisplayWidget Center"
            }
        ]
    },
    {
        id: "mon02",
        name: "ROG Swift OLED PG32UCDM",
        category: "顯示器",
        specs: [
            {
                label: "32\" 4K",
                price: 45900,
                img: "ProductImages/ROG Swift OLED PG32UCDM.webp",
                desc: "ROG Swift OLED PG32UCDM 電競顯示器 ― 32 吋 (31.5 吋可視)、4K (3840 x 2160) QD-OLED、240 Hz、0.03 ms(GTG) 反應時間、G-SYNC® 相容、特製散熱技術、石墨烯薄膜、均勻亮度、99% DCI-P3、真實 10 位元色彩、90 W Type-C® 及 ASUS DisplayWidget Center"
            }
        ]
    },
    {
        id: "kb01",
        name: "ROG Azoth Extreme",
        category: "鍵盤",
        specs: [
            {
                label: "無線鍵盤",
                price: 16490,
                img: "ProductImages/ROG Azoth Extreme.webp",
                desc: "ROG Azoth Extreme 為一款 75% 無線客製化電競機械鍵盤，採用優質鋁合金機身與金屬側蓋。使用 ROG 輪詢率加速器時可於有線及無線連接達到 8,000 Hz ，同時在 ROG SpeedNova 2.4 GHz 無線模式下，電池續航力可超過 1,600 小時。透過升級全彩 OLED 觸控顯示器與三向控制旋鈕，可進行系統監控與即時設置調整。碳纖維定位板則可提供脆耳的擊鍵音質，同時以三層消音結構吸收振動。可調節式 gasket 結構設計附帶撥桿開關，可自由於兩種打字偏好設定間自由切換。"
            }
        ]
    },
    {
        id: "kb02",
        name: "ROG Falchion Ace HFX 磁軸電競鍵盤",
        category: "鍵盤",
        specs: [
            {
                label: "電競鍵盤",
                price: 6490,
                img: "ProductImages/ROG Falchion Ace HFX 磁軸電競鍵盤.webp",
                desc: "ROG Falchion Ace HFX 65% 磁軸電競鍵盤，附預潤 ROG HFX 磁軸、Rapid Trigger 快速觸發切換開關、Speed Tap 模式、互動式觸控面板、8000 Hz 輪詢率、五層消音結構、雙 Type-C 連接埠、三個傾斜角度和保護蓋"
            }
        ]
    },
    {
        id: "mouse01",
        name: "ROG Harpe Ace Mini 無線滑鼠",
        category: "滑鼠",
        specs: [
            {
                label: "無線滑鼠",
                price: 2500,
                img: "ProductImages/ROG Harpe Ace Mini 無線滑鼠.webp",
                desc: "ROG Harpe Ace Mini 是一款極輕的 49 g 半對稱電競滑鼠，精巧外型經專業 FPS 玩家認可。ROG Harpe Ace Mini 搭載 42,000 dpi ROG AimPoint Pro 光學感應器和 ROG 光學微動開關，透過 SpeedNova 無線技術展現領先業界的無線效能，並支援高達 8,000 Hz 的無線輪詢率 ( 與 ROG Polling Rate Booster 相容 )。"
            }
        ]
    },
    {
        id: "mouse02",
        name: "ROG Spatha X 無線滑鼠",
        category: "滑鼠",
        specs: [
            {
                label: "無線滑鼠",
                price: 3990,
                img: "ProductImages/ROG Spatha X 無線滑鼠.webp",
                desc: "無線電競滑鼠具備雙模連線功能 (有線 / 2.4 GHz)、磁吸式充電底座、12 顆可編程按鍵、經特別調校的 19,000 dpi 光學感測器、獨家可更換微動開關插槽、ROG 微動開關、ROG Paracord 以及 Aura Sync RGB 燈效"
            }
        ]
    },
    {
        id: "mouse03",
        name: "ROG Harpe Mini Core 有線電競滑鼠",
        category: "滑鼠",
        specs: [
            {
                label: "電競滑鼠",
                price: 1490,
                img: "ProductImages/ROG Harpe Mini Core 有線電競滑鼠.webp",
                desc: "ROG Harpe Mini Core 是一款 52 g 有線電競滑鼠，採用經專業玩家認可的對稱外型，並搭載 12,000 dpi 光學感應器、ROG 二代微動開關、ROG 可更換微動開關插槽、ROG Paracord 連接線以及 100% PTFE 圓邊滑鼠腳。​"
            }
        ]
    },
    {
        id: "phone01",
        name: "ROG Phone 9",
        category: "手機",
        specs: [
            {
                label: "ROG Phone 9",
                price: 36990,
                img: "ProductImages/ROG Phone 9.webp",
                desc: "基本款"
            },
            {
                label: "ROG Phone 9 Pro",
                price: 39990,
                img: "ProductImages/ROG Phone 9 Pro.webp",
                desc: "進階款"
            },
            {
                label: "ROG Phone 9 Pro Edition",
                price: 43990,
                img: "ProductImages/ROG Phone 9 Pro Edition.webp",
                desc: "頂配款"
            }
        ]
    },
    {
        id: "ear01",
        name: "ROG Theta 7.1 電競耳機",
        category: "耳機",
        specs: [
            {
                label: "有線電競耳機",
                price: 6990,
                img: "ProductImages/ROG Theta 7.1 電競耳機.webp",
                desc: "ROG Theta 7.1 USB-C 電競耳機配備 7.1 環繞音效、AI 降噪麥克風、ROG 家庭劇院級 7.1 DAC、ESS 四核心單體，適用於 PC、PS4、任天堂 Switch 及智慧型裝置"
            }
        ]
    },
    {
        id: "ear02",
        name: "ROG Pelta 無線電競耳機",
        category: "耳機",
        specs: [
            {
                label: "無線電競耳機",
                price: 4590,
                img: "ProductImages/ROG Pelta 無線電競耳機.webp",
                desc: "此款三模連線 RGB 電競耳機採用 ROG SpeedNova 無線連接技術，並具備 50 mm ROG 鍍鈦振膜驅動單體、精心調校無線音效、10 mm 超寬頻吊桿式麥克風、輕量 309 g 設計，以及 ASUS Aura Sync RGB 燈光效果"
            }
        ]
    },
    {
        id: "ear03",
        name: "ROG Cetra True Wireless 無線藍牙耳機",
        category: "耳機",
        specs: [
            {
                label: "入耳式無線藍牙耳機",
                price: 4590,
                img: "ProductImages/ROG Cetra True Wireless 無線藍牙耳機.webp",
                desc: "ROG Cetra 真無線電競耳機具備低延遲無線連線、ANC、搭配無線充電盒可提供最長 27 小時電池續航力、IPX4 防水，以及可透過 Armoury Crate 支援 EQ/虛擬 7.1 聲道"
            }
        ]
    },
    {
        id: "ear04",
        name: "ROG Cetra II Core 入耳式電競耳機",
        category: "耳機",
        specs: [
            {
                label: "入耳式電競耳機",
                price: 4590,
                img: "ProductImages/ROG Cetra II Core 入耳式電競耳機.webp",
                desc: "ROG Cetra II Core 入耳式電競耳機搭載特別調校的 ASUS Essence 驅動單體以及3.5 mm 接頭相容於 PC、筆電、手機、ROG Phone 5、PlayStation 5、Xbox Series X/S 與任天堂 Switch"
            }
        ]
    }
];

// 頁面載入時顯示全部
window.onload = () => {
    renderProducts(products);
};

// 顯示商品
function renderProducts(list) {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = "";

    list.forEach(p => {
        const spec = p.specs[0];

        grid.innerHTML += `
            <div class="product-card" onclick="goDetail('${p.id}')">
                <img src="${spec.img}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p>$${spec.price}</p>
                <button class="add-to-cart-btn" onclick="addToCart(event, '${p.id}')">加入購物車</button>
            </div>
        `;
    });
}

// 分類篩選
function filterByCategory(cat) {
    const result = products.filter(p => p.category === cat);
    renderProducts(result);
}

// 前往詳細頁
function goDetail(id) {
    location.href = `product.html?id=${id}`;
}

// 加入購物車
// function addToCart(event, id) {
//     event.stopPropagation(); // 阻止跳轉
//     // 這裡可以添加購物車邏輯
//     alert("已加入購物車！");
// }

// 第二版(Gemini)
// 加入購物車 (列表頁預設加入第一個規格)
function addToCart(event, id) {
    event.stopPropagation(); // 阻止跳轉到詳細頁
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // 列表頁預設規格索引為 0
    const defaultSpecIndex = 0;

    // 尋找購物車中是否已有「同產品且同規格」的項目
    let item = cart.find(i => i.id === id && i.specIndex === defaultSpecIndex);
    
    if (item) {
        item.quantity++;
    } else {
        // 存入時包含 specIndex
        cart.push({ id: id, specIndex: defaultSpecIndex, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // 更新導覽列的購物車數量顯示
    updateCartCount();
    
    alert("已加入購物車！");
}

// 新增一個統一更新數量顯示的函式
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountEl = document.getElementById("cartCount");
    if (cartCountEl) {
        cartCountEl.innerText = count;
    }
}