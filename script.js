// 假设停车场数据以一个对象数组的形式存在
const parkingLots = [
    {
        name: '国实地下停车场', slots: [
            { slot: 'B1-001', occupied: true, license: '京NE4215' },
            { slot: 'B1-002', occupied: false, license: '' },
            { slot: 'B1-003', occupied: true, license: '京K35211' },
            { slot: 'B1-004', occupied: false, license: '' },
            { slot: 'B1-005', occupied: true, license: '京AAV8609' },
            { slot: 'B1-006', occupied: false, license: '' },
            { slot: 'B1-007', occupied: false, license: '' },
            { slot: 'B1-008', occupied: false, license: '' },
            { slot: 'B1-009', occupied: false, license: '' },
            { slot: 'B1-010', occupied: false, license: '' },
            { slot: 'B1-011', occupied: true, license: '京K35211' },
            { slot: 'B1-012', occupied: false, license: '' },
            { slot: 'B1-013', occupied: true, license: '京NLY356' },
            { slot: 'B1-014', occupied: false, license: '' },
            { slot: 'B1-015', occupied: false, license: '' },
            { slot: 'B1-016', occupied: true, license: '京HQ1A6G' },
            { slot: 'B1-017', occupied: true, license: '京J5O24S' },
            { slot: 'B1-018', occupied: false, license: '' },
            { slot: 'B1-019', occupied: false, license: '' },
            { slot: 'B1-020', occupied: true, license: '京QDIIEL' },
            { slot: 'B1-021', occupied: false, license: '' },
            { slot: 'B1-022', occupied: true, license: '京NEXG29' },
            { slot: 'B1-023', occupied: true, license: '京H90N17' },
            { slot: 'B1-024', occupied: true, license: '京MS7G6S' },
            { slot: 'B1-025', occupied: true, license: '京HRKX13' },
            { slot: 'B1-026', occupied: false, license: '' },
            { slot: 'B1-027', occupied: true, license: '京O03PBT' },
            { slot: 'B1-028', occupied: true, license: '京B799SI' },
            { slot: 'B1-029', occupied: false, license: '' },
            { slot: 'B1-030', occupied: false, license: '' },
            { slot: 'B1-031', occupied: false, license: '' },
            { slot: 'B1-032', occupied: false, license: '' },
            { slot: 'B1-033', occupied: false, license: '' },
            { slot: 'B1-034', occupied: true, license: '京G38NNK' },
            { slot: 'B1-035', occupied: false, license: '' },
            { slot: 'B1-036', occupied: true, license: '京PBDE51' },
            { slot: 'B1-037', occupied: false, license: '' },
            { slot: 'B1-038', occupied: false, license: '' },
            { slot: 'B1-039', occupied: true, license: '京QTINMT' },
            { slot: 'B1-040', occupied: false, license: '' },
            { slot: 'B1-041', occupied: false, license: '' },
            { slot: 'B1-042', occupied: true, license: '京CIDZO5' },
            { slot: 'B1-043', occupied: false, license: '' },
            { slot: 'B1-044', occupied: true, license: '京FDGIKY' },
            { slot: 'B1-045', occupied: true, license: '京FRYXM9' },
            { slot: 'B1-046', occupied: true, license: '京V1JH5S' },
            { slot: 'B1-047', occupied: false, license: '' },
            { slot: 'B1-048', occupied: true, license: '京F2YPTU' },
            { slot: 'B1-049', occupied: true, license: '京N3OTAR' },
            { slot: 'B1-050', occupied: true, license: '京G4RAMI' },
            { slot: 'B1-051', occupied: false, license: '' },
            { slot: 'B1-052', occupied: false, license: '' },
            { slot: 'B1-053', occupied: false, license: '' },
            { slot: 'B1-054', occupied: false, license: '' },
            { slot: 'B1-055', occupied: true, license: '京HM1QVV' },
            { slot: 'B1-056', occupied: false, license: '' },
            { slot: 'B1-057', occupied: false, license: '' },
            { slot: 'B1-058', occupied: true, license: '京OSCWKL' },
            { slot: 'B1-059', occupied: false, license: '' },
            { slot: 'B1-060', occupied: true, license: '京N4YDU1' },
            { slot: 'B1-061', occupied: false, license: '' },
            { slot: 'B1-062', occupied: true, license: '京Q1KEAC' },
            { slot: 'B1-063', occupied: true, license: '京M31YW9' },
            { slot: 'B1-064', occupied: true, license: '京NVUM3Y' },
            { slot: 'B1-065', occupied: false, license: '' },
            { slot: 'B1-066', occupied: false, license: '' },
            { slot: 'B1-067', occupied: false, license: '' },
            { slot: 'B1-068', occupied: true, license: '京APFKXD' },
            { slot: 'B1-069', occupied: true, license: '京FD26WS' },
            { slot: 'B1-070', occupied: true, license: '京YB5EN5' },
            { slot: 'B1-071', occupied: false, license: '' },
            { slot: 'B1-072', occupied: true, license: '京ETE8JP' },
            { slot: 'B1-073', occupied: false, license: '' },
            { slot: 'B1-074', occupied: false, license: '' },
            { slot: 'B1-075', occupied: true, license: '京J9QHKN' },
            { slot: 'B1-076', occupied: false, license: '' },
            { slot: 'B1-077', occupied: true, license: '京MXJGXF' },
            { slot: 'B1-078', occupied: true, license: '京PWTX1C' },
            { slot: 'B1-079', occupied: false, license: '' },
            { slot: 'B1-080', occupied: false, license: '' },
            { slot: 'B1-081', occupied: false, license: '' },
            { slot: 'B1-082', occupied: true, license: '京JB8CYZ' },
            { slot: 'B1-083', occupied: false, license: '' },
            { slot: 'B1-084', occupied: false, license: '' },
            { slot: 'B1-085', occupied: false, license: '' },
            { slot: 'B1-086', occupied: false, license: '' },
            { slot: 'B1-087', occupied: true, license: '京V3VHPA' },
            { slot: 'B1-088', occupied: false, license: '' },
            { slot: 'B1-089', occupied: false, license: '' },
            { slot: 'B1-090', occupied: false, license: '' },
            { slot: 'B1-091', occupied: false, license: '' },
            { slot: 'B1-092', occupied: true, license: '京B6F1H4' },
            { slot: 'B1-093', occupied: false, license: '' },
            { slot: 'B1-094', occupied: true, license: '京OHJPCD' },
            { slot: 'B1-095', occupied: true, license: '京M250K2' },
            { slot: 'B1-096', occupied: true, license: '京B7ULCT' },
            { slot: 'B1-097', occupied: false, license: '' },
            { slot: 'B1-098', occupied: true, license: '京O28NSE' },
            { slot: 'B1-099', occupied: true, license: '京A7MYUB' },
            { slot: 'B1-100', occupied: false, license: '' },



            // 添加更多停车位信息
        ]
    },
    {
        name: '蓝球场停车场', slots: [
            { slot: 'B01', occupied: true, license: '京Q0H7LL' },
            { slot: 'B02', occupied: false, license: '' },
            { slot: 'B03', occupied: false, license: '' },
            { slot: 'B04', occupied: false, license: '' },
            { slot: 'B05', occupied: true, license: '京LHDKOK' },
            { slot: 'B06', occupied: false, license: '' },
            { slot: 'B07', occupied: false, license: '' },
            { slot: 'B08', occupied: false, license: '' },
            { slot: 'B09', occupied: true, license: '京D8F0KW' },
            { slot: 'B10', occupied: true, license: '京G88BVS' },
            { slot: 'B11', occupied: false, license: '' },
            { slot: 'B12', occupied: true, license: '京Q9U7WV' },
            { slot: 'B13', occupied: true, license: '京VNV2XC' },
            { slot: 'B14', occupied: true, license: '京Y730MM' },
            { slot: 'B15', occupied: false, license: '' },
            { slot: 'B16', occupied: false, license: '' },
            { slot: 'B17', occupied: true, license: '京AZD1E6' },
            { slot: 'B18', occupied: true, license: '京A6E8XR' },
            { slot: 'B19', occupied: false, license: '' },
            { slot: 'B20', occupied: false, license: '' },
            { slot: 'B21', occupied: true, license: '京OC9TAE' },
            { slot: 'B22', occupied: true, license: '京NU2YTO' },
            { slot: 'B23', occupied: false, license: '' },
            { slot: 'B24', occupied: true, license: '京JI3UM3' },
            { slot: 'B25', occupied: false, license: '' },
            { slot: 'B26', occupied: true, license: '京Y7PVBL' },
            { slot: 'B27', occupied: false, license: '' },
            { slot: 'B28', occupied: false, license: '' },
            { slot: 'B29', occupied: false, license: '' },
            { slot: 'B30', occupied: false, license: '' },
            // 添加更多停车位信息
        ]
    },
    {
        name: '实验楼停车场', slots: [
            { slot: 'C01', occupied: false, license: '' },
            { slot: 'C02', occupied: false, license: '' },
            { slot: 'C03', occupied: true, license: '京GCTGUK' },
            { slot: 'C04', occupied: false, license: '' },
            { slot: 'C05', occupied: false, license: '' },
            { slot: 'C06', occupied: true, license: '京QZFCPF' },
            { slot: 'C07', occupied: true, license: '京O07I8F' },
            { slot: 'C08', occupied: true, license: '京GFUNU1' },
            { slot: 'C09', occupied: true, license: '京DAUD5N' },
            { slot: 'C10', occupied: true, license: '京Q2AMU6' },
            { slot: 'C11', occupied: false, license: '' },
            { slot: 'C12', occupied: false, license: '' },
            { slot: 'C13', occupied: false, license: '' },
            { slot: 'C14', occupied: true, license: '京E8PTDG' },
            { slot: 'C15', occupied: false, license: '' },
            { slot: 'C16', occupied: false, license: '' },
            { slot: 'C17', occupied: false, license: '' },
            { slot: 'C18', occupied: true, license: '京JTCMKB' },
            { slot: 'C19', occupied: true, license: '京K2A1EZ' },
            { slot: 'C20', occupied: true, license: '京Y345W3' },
            { slot: 'C21', occupied: true, license: '京BYY73G' },
            { slot: 'C22', occupied: false, license: '' },
            { slot: 'C23', occupied: false, license: '' },
            { slot: 'C24', occupied: false, license: '' },
            { slot: 'C25', occupied: true, license: '京FGN8MK' },
            { slot: 'C26', occupied: true, license: '京GBYOOA' },
            { slot: 'C27', occupied: false, license: '' },
            { slot: 'C28', occupied: true, license: '京GUGFG3' },
            { slot: 'C29', occupied: false, license: '' },
            { slot: 'C30', occupied: false, license: '' },
            // 添加更多停车位信息
        ]
    },
    // 添加更多停车场信息
];

// 页面加载时显示默认的停车场信息
window.onload = function () {
    const defaultParkingLot = parkingLots[0]; // 默认显示第一个停车场的信息
    displayParkingLot(defaultParkingLot);
    addClickListeners();
}

// 查询停车场状态并更新停车位显示
function queryParkingLot() {
    const selectedParkingLotName = document.getElementById('parking-lot-select').value;
    const selectedParkingLot = getParkingLotByName(selectedParkingLotName);

    if (selectedParkingLot) {
        displayParkingLot(selectedParkingLot);
        addClickListeners(); // 添加事件监听器以显示牌照信息
    }
}

// 根据停车场名称获取停车场信息
function getParkingLotByName(name) {
    return parkingLots.find(parkingLot => parkingLot.name === name);
}

// 显示停车场信息和停车位状态
function displayParkingLot(parkingLot) {
    const parkingLotGrid = document.getElementById('parking-lot-grid');
    parkingLotGrid.innerHTML = '';

    parkingLot.slots.forEach(slot => {
        const slotDiv = document.createElement('div');
        slotDiv.textContent = slot.slot;
        slotDiv.classList.add('slot');

        if (slot.occupied) {
            slotDiv.classList.add('occupied');
        } else {
            slotDiv.classList.add('vacant');
        }

        // 添加点击事件监听器
        slotDiv.addEventListener('click', function () {
            if (slot.occupied) {
                alert(`停车位 ${slot.slot} 的牌照信息是: ${slot.license}`);
            } else {
                alert(`停车位 ${slot.slot} 是空闲的，没有牌照信息。`);
            }
        });

        parkingLotGrid.appendChild(slotDiv);
    });
}
// 在你的 script.js 文件中添加以下代码

// 查询车辆位置并显示结果
function queryLocationByLicense() {
    const licenseInput = document.getElementById('license-input');
    const license = licenseInput.value.trim();

    if (license) {
        const location = findLocationByLicense(license);

        if (location) {
            document.getElementById('location-result').textContent = `车辆牌照 ${license} 所在位置是：${location}`;
        } else {
            document.getElementById('location-result').textContent = `未找到与牌照 ${license} 相关的位置信息。`;
        }
    } else {
        document.getElementById('location-result').textContent = '请输入有效的车牌号码。';
    }
}

// 根据车牌号查询车辆位置
function findLocationByLicense(license) {
    for (const parkingLot of parkingLots) {
        for (const slot of parkingLot.slots) {
            if (slot.license === license) {
                return `${parkingLot.name}  ${slot.slot}`;
            }
        }
    }
    return null;
}
