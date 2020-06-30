export const PRODUCT = {
    // 支持值为 Object 和 Array
    'GET /CSP/Product/GetAll': () => {
        let data = [
            {
                id: 111,
                name: "商品1",
                sku: "111",
                url: "http://4454",
                properties: [
                    {
                        type: "1",
                        value: "2"
                    }
                ],
                classifications: [
                    {
                        regionId: "123",
                        regionName: "张三",
                        code: [
                            "111"
                        ],
                        justification: "11111",
                        id: "145"
                    }
                ],
                unitsInTransit: 0,
                activeShipments: 0,
                imageId: "123",
            },
            {
                name: "商品2",
                sku: "111",
                url: "http://4454",
                properties: [
                    {
                        type: "1",
                        value: "2"
                    }
                ],
                classifications: [
                    {
                        regionId: "123",
                        regionName: "李四",
                        code: [
                            "111"
                        ],
                        justification: "11111",
                        id: "145"
                    }
                ],
                unitsInTransit: 0,
                activeShipments: 0,
                imageId: "123",
                id: 222
            },
            {
                name: "商品3",
                sku: "111",
                url: "http://4454",
                properties: [
                    {
                        type: "1",
                        value: "2"
                    }
                ],
                classifications: [
                    {
                        regionId: "123",
                        regionName: "王五",
                        code: [
                            "111"
                        ],
                        justification: "11111",
                        id: "145"
                    }
                ],
                unitsInTransit: 0,
                activeShipments: 0,
                imageId: "123",
                id: 333
            }
        ];
        const res: any = {
            items: data,
            total: data.length,
        };
        return res;
    },
};
