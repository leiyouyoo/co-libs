 
    /**
     * 用于表格设置的 Dto
     */
    export class FCMDataTableSettingDto {
        
         
            /* 针对的数据表格
0 = PreShipment
1 = Shipment
2 = DeliveryInfo */ 
            type?: number;
         
            /* 表格设置值，Json 字符串 */ 
            value?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class FCMListResultDto<T> {
        
         
            
            items: T[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class FCMQuantityDto {
        
         
            /* 值 */ 
            value: number;
         
            /* 指定此数量的计量单位。
对于重量，单位为 kg（千克）或 lbs（磅），
对于体积，单位为 cbm（立方米）或 cbf（立方英尺） */ 
            unit: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class FCMShipmentDto {
        
         
            
            customerId?: string;
         
            
            customerBookingId?: string;
         
            /* 运单编号 */ 
            shipmentNo?: string;
         
            /* SO号（OceanShipment） */ 
            carrierBookingNo?: string;
         
            /* 交货方式, 客户自送、Cityocean上门取件
0 = NotSet
1 = DeliveryGoodsByMyself
2 = PickUpByCityocean */ 
            fbaPickUpMethodType?: number;
         
            /* 交货位置id，用于拉取名称，前端无需 */ 
            originAddressId?: string;
         
            /* 交货位置 */ 
            originAddress?: string;
         
            /* 交货仓库id，用于拉取名称，前端无需 */ 
            originWarehouseId?: string;
         
            /* 交货仓库 */ 
            originWarehouse?: string;
         
            /* 在起始地交货日期（货物就绪时间） */ 
            cargoReadyDate?: string;
         
            /* 主要运输方式
0 = NotSet
1 = Ocean
2 = Air
3 = Truck
4 = Rail */ 
            transportationMode?: number;
         
            /* 贸易类型
0 = NotSet
1 = General
2 = Fba
3 = Fbm */ 
            tradeType?: number;
         
            /* 渠道 */ 
            channel?: string;
         
            /* 承运类型 值：自拼、外配 (根据承运人判断)
0 = NotSet
1 = SelfMade
2 = Outsourcing */ 
            carrierType?: number;
         
            /* 业务员 */ 
            serviceUser?: string;
         
            /* 客户 */ 
            customerName?: string;
         
            /* 下单日期 */ 
            creationTime?: string;
         
            /* 创建人 */ 
            creator?: string;
         
            /* FBA编号组（取item所有斜杠/分隔） */ 
            fbano?: string;
         
            /* 自定义引用编号 */ 
            referenceId?: string;
         
            /* 快递单号 */ 
            expressNo?: string;
         
            /* 柜号 */ 
            containerNos?: string;
         
            /* 柜型 */ 
            containerCounts?: string;
         
            /* 大船名称 */ 
            vesselName?: string;
         
            /* 航次 */ 
            voyageNo?: string;
         
            /* 品名 */ 
            commodity?: string;
         
            /* 装运的产品总数 */ 
            totalQuantity?: FCMQuantityDto;
         
            /* 装运的产品总重量 */ 
            totalWeight?: FCMQuantityDto;
         
            /* 装运的产品总体积 */ 
            totalVolume?: FCMQuantityDto;
         
            /* 备注  todo:暂时不知道哪个 */ 
            remark?: string;
         
            
            legs?: any[];
         
            
            id?: string;
        
        
    }
 
    /**
     * 预报单查询模型
     */
    export class FCMGetPreShipmentListInput {
        
         
            /* 是否是CSP的客户创建的 */ 
            isCustomerCreate?: boolean;
         
            /* 运输方式，枚举下拉
0 = NotSet
1 = Ocean
2 = Air
3 = Truck
4 = Rail */ 
            transportationMode?: number;
         
            /* 下单日期 */ 
            creationTime?: string;
         
            /* 业务员 */ 
            serviceUserId?: number;
         
            /* 客户id */ 
            customerId?: string;
         
            /* 交货方式，枚举下拉
0 = NotSet
1 = DeliveryGoodsByMyself
2 = PickUpByCityocean */ 
            fbaPickUpMethodType?: number;
         
            /* 操作口岸 */ 
            serviceCompanyId?: string;
         
            /* 承运人（代理）客户Id，如 Cityocean ... */ 
            agentCustomerId?: string;
         
            /* 联系人，模糊 */ 
            contactName?: string;
         
            /* 运单号，模糊 */ 
            shipmentNo?: string;
         
            /* 送货地址，模糊 */ 
            destinationAddress?: string;
         
            /* 交货位置，模糊 */ 
            originAddress?: string;
         
            /* 交货仓库，模糊 */ 
            originWarehouse?: string;
         
            /* 国家，模糊 */ 
            country?: string;
         
            /* 渠道，模糊 */ 
            channel?: string;
         
            /* FBA编号，模糊 */ 
            fbaNo?: string;
         
            /* 创建人，模糊 */ 
            creatorUser?: string;
         
            
            ids?: any[];
         
            /* 是否导出 */ 
            isExport?: boolean;
         
            /* 排序 */ 
            sorting?: string;
         
            /* 页大小 */ 
            maxResultCount?: number;
         
            /* 跳过指定条数 */ 
            skipCount?: number;
        
        
    }
 
    /**
     * shipment列表模型
     */
    export class FCMPreShipmentListItemDto {
        
         
            /* 运单编号 */ 
            shipmentNo?: string;
         
            /* 主要运输方式
0 = NotSet
1 = Ocean
2 = Air
3 = Truck
4 = Rail */ 
            transportationMode?: number;
         
            /* 下单时间（创建时间） */ 
            creationTime?: string;
         
            /* 业务员 */ 
            serviceUser?: string;
         
            /* 客户 */ 
            customerName?: string;
         
            /* 客户类型
1 = Carrier
2 = AirLine
3 = Forwarding
4 = DirectClient
5 = Trucker
6 = CustomsBroker
7 = WareHouse
8 = Storage
9 = RailWay
10 = Express
11 = Terminal
12 = Other */ 
            customerType?: number;
         
            /* 联系人 */ 
            contactName?: string;
         
            /* 目的地送货地址(item里取) */ 
            destinationAddress?: string;
         
            /* 交货方式, 客户自送、Cityocean上门取件
0 = NotSet
1 = DeliveryGoodsByMyself
2 = PickUpByCityocean */ 
            fbaPickUpMethodType?: number;
         
            /* 在起始地交货日期（货物就绪时间） */ 
            cargoReadyDate?: string;
         
            /* 交货位置id，用于拉取名称，前端无需 */ 
            originAddressId?: string;
         
            /* 交货位置 */ 
            originAddress?: string;
         
            /* 交货仓库id，用于拉取名称，前端无需 */ 
            originWarehouseId?: string;
         
            /* 交货仓库 */ 
            originWarehouse?: string;
         
            /* 国家-送货地址的国家 */ 
            country?: string;
         
            /* 品名 */ 
            commodity?: string;
         
            /* 总数量 */ 
            quantity?: FCMQuantityDto;
         
            /* 总重量 */ 
            weight?: FCMQuantityDto;
         
            /* 总体积 */ 
            volume?: FCMQuantityDto;
         
            /* 渠道 */ 
            channel?: string;
         
            /* 入仓时间 */ 
            cargoPutAwayDate?: string;
         
            /* 操作口岸 */ 
            serviceCompany?: string;
         
            /* FBA编号组（取item所有斜杠/分隔） */ 
            fbano?: string;
         
            /* 承运人 */ 
            agentCustomer?: string;
         
            /* 创建人 */ 
            creatorUser?: string;
         
            /* 是否是CSP的客户创建的 */ 
            isCustomerCreate?: boolean;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class FCMPagedResultDto<T> {
        
         
            
            totalCount: number;
         
            
            items: T[];
        
        
    }
 
    /**
     * booking相关信息
     */
    export class FCMBookingDetailDto {
        
         
            /* 出货口岸 */ 
            serviceCompanyId: string;
         
            /* 渠道 CO.FCM.Domain.Shipments.Enums.ChannelType */ 
            channel: string;
         
            /* CSP客户提交的bookingid */ 
            customerBookingId?: string;
         
            /* 发货人客户Id(暂时CSP过来的才有) */ 
            shipperCustomerId?: string;
         
            /* 是否是CSP的客户创建的 */ 
            isCustomerCreate?: boolean;
         
            /* 交货方式    CO.FCM.Domain.Shipments.Enums.FbaPickUpMethodType
0 = NotSet
1 = DeliveryGoodsByMyself
2 = PickUpByCityocean */ 
            fbaPickUpMethodType?: number;
         
            /* 联系人id */ 
            contactId?: string;
         
            /* 关联的起始地址Id (交货位置) */ 
            originAddressId?: string;
         
            /* 起始仓库地址（交货仓库） */ 
            originWarehouseId?: string;
         
            /* 目的港 */ 
            destinationPortId?: string;
         
            /* 起始港Id */ 
            originPortId?: string;
         
            /* 目的仓库地址 */ 
            destinationWarehouseId?: string;
         
            /* 目的地址  
<remarks>FBM 时来源：客户自己创建的【network-MY-organization-location】</remarks> */ 
            destinationAddressId?: string;
         
            /* 预计在目的港交货日期，指必须交付货物的日期。 */ 
            deliveryDate?: string;
         
            /* 在起始地交货日期（货物就绪时间） */ 
            cargoReadyDate?: string;
         
            /* 品名 */ 
            commodity?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class FCMOceanShipmentDetailDto {
        
         
            /* SO 号，船东订舱号 */ 
            carrierBookingNo?: string;
        
        
    }
 
    /**
     * FBA信息Dto  （受理才填）
     */
    export class FCMFbaShipmentDetailDto {
        
         
            /* 快递单号 */ 
            expressNo?: string;
         
            /* 快递单号备注 */ 
            expressNoRemark?: string;
         
            /* 入库单号 */ 
            warehouseNo?: string;
         
            /* 货拉拉单号 */ 
            huoLalaOrderNo?: string;
         
            /* FBA运输方式：整柜直送、拆箱后配送，客户自提，暂存仓库
0 = NotSet
1 = FCLDirectDelivery
2 = DeliveryAfterUnboxing
3 = SelfDelivery
4 = TemporaryWarehouse */ 
            fbaDeliveryType?: number;
         
            /* FBA运输方式备注 */ 
            fbaDeliveryTypeRemark?: string;
         
            /* 货物入库时间（入仓时间） */ 
            cargoPutAwayDate?: string;
         
            /* 成本金额 */ 
            costPrice?: number;
         
            /* 成本币种 */ 
            currencyCode?: string;
         
            /* 计费吨 */ 
            revenueTon?: number;
        
        
    }
 
    /**
     * 创建或编辑shipment
     */
    export class FCMCreateOrUpdateShipmentInput {
        
         
            /* 主客户Id */ 
            customerId: string;
         
            /* 业务类型（运输方式）
0 = NotSet
1 = Ocean
2 = Air
3 = Truck
4 = Rail */ 
            transportationMode: number;
         
            /* 客户名（无需提交，用于编辑显示） */ 
            customer?: string;
         
            /* 客户类型（无需提交，用于编辑显示）
1 = Carrier
2 = AirLine
3 = Forwarding
4 = DirectClient
5 = Trucker
6 = CustomsBroker
7 = WareHouse
8 = Storage
9 = RailWay
10 = Express
11 = Terminal
12 = Other */ 
            customerType?: number;
         
            /* 业务员id */ 
            serviceUserId?: number;
         
            /* 客服人员 */ 
            customerServiceUserId?: number;
         
            
            customerServiceUser?: string;
         
            /* 承运人（代理）客户Id，如 Cityocean ... */ 
            agentCustomerId?: string;
         
            /* 同行名（无需提交，用于编辑显示） */ 
            agentCustomer?: string;
         
            /* 上门提货时间范围(解析后赋值到cargoreadydate) */ 
            pickUpTimeRange?: string;
         
            /* 贸易条款，可以是 EXW, FCA, FAS, FOB, CPT, CFR, CIF, CIP, DAT, DAP, DDP, or DPU. */ 
            incoterm?: string;
         
            /* 运输条款，port_to_door、port_to_port、door_to_door、door_to_port ... */ 
            freightType?: string;
         
            /* 根据送货地址判断(后台已处理，前端无需处理)
0 = NotSet
1 = General
2 = Fba
3 = Fbm */ 
            tradeType?: number;
         
            /* 运单编号 */ 
            shipmentNo?: string;
         
            /* 转运单号 */ 
            transferNo?: string;
         
            /* 报关行客户Id */ 
            customsCustomerId?: string;
         
            /* 清关行客户Id */ 
            customsClearanceCustomerId?: string;
         
            /* booking相关信息 */ 
            booking?: FCMBookingDetailDto;
         
            /* 海运业务明细 */ 
            oceanShipment?: FCMOceanShipmentDetailDto;
         
            /* FBA信息 */ 
            fbaShipment?: FCMFbaShipmentDetailDto;
         
            /* Shipment 中的产品信息 */ 
            lineItems?: any[];
         
            /* 地址分组产品信息 */ 
            addressItems?: any[];
         
            
            id?: string;
        
        
    }
 
    /**
     * 入仓模型
     */
    export class FCMWarehousingDto {
        
         
            /* 入仓时间 */ 
            warehousingDate: string;
         
            /* shipmentId */ 
            shipmentIds?: any[];
        
        
    }
 
    /**
     * 用于作废或取消作废多个Shipment的输入参数
     */
    export class FCMChangeShipmentInvalidStatusInput {
        
         
            /* 需要变更的 ShipmentId 集合 */ 
            shipmentIds?: any[];
         
            /* 是否作废，true 作废，false 取消作废 */ 
            isSetInvalid?: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class FCMSetPostAgentCustomerInput {
        
         
            /* 设置后段代理的 ShipmentId 集合 */ 
            shipmentIds?: any[];
         
            /* 后段代理客户Id */ 
            postAgentCustomerId?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class FCMGetShipmentListInput {
        
         
            /* 搜索关键字 */ 
            searchText?: string;
         
            /* 承运人 Ids */ 
            agentCustomerIds?: any[];
         
            /* 渠道 */ 
            channel?: string;
         
            /* 开始时间 */ 
            startTime?: string;
         
            /* 结束时间 */ 
            endTime?: string;
         
            /* 是否作废，null 时获取全部，false 时只获取未作废，true 时只获取已作废 */ 
            isInvalid?: boolean;
         
            
            ids?: any[];
         
            /* 是否导出 */ 
            isExport?: boolean;
         
            /* 排序 */ 
            sorting?: string;
         
            /* 页大小 */ 
            maxResultCount?: number;
         
            /* 跳过指定条数 */ 
            skipCount?: number;
        
        
    }
 
    /**
     * 平铺的event事件时间
     */
    export class FCMShipmentEventDetailDto {
        
         
            /* 订单预受理 */ 
            createBooking?: string;
         
            /* 已申请订舱 */ 
            applyBooking?: string;
         
            /* 订舱成功 */ 
            successBooking?: string;
         
            /* 货物已装柜 */ 
            containerLoading?: string;
         
            /* 已报关 */ 
            customsdeclaration?: string;
         
            /* 已经开船 */ 
            onboard?: string;
         
            /* 转运至目的港 */ 
            toPod?: string;
         
            /* 已出税金单 */ 
            taxBill?: string;
         
            /* 已付账单 */ 
            billsPaid?: string;
         
            /* 清关/查验/放行 */ 
            customsClearance?: string;
         
            /* 已预约提货 */ 
            scheduledPickup?: string;
         
            /* 转运到仓库 */ 
            toWarehouse?: string;
         
            /* 空柜 */ 
            emptyCabinet?: string;
         
            /* 提空柜 */ 
            pickupEmptyCabinet?: string;
         
            /* UPS/FedEx已提货 */ 
            pickupFedExUPS?: string;
         
            /* FBA预约日期 */ 
            fbaAppointmentDate?: string;
         
            /* FBA实际送货日期 */ 
            fbaActualDeliveryDate?: string;
         
            /* POD提供日期 */ 
            podDate?: string;
         
            /* 已退回 */ 
            refusal?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class FCMShipmentListItemDto {
        
         
            /* 操作状态
0 = NoSet
1 = Pending
2 = Ordered
3 = InTransit
4 = Completed
5 = Refusal */ 
            operationStatus?: number;
         
            /* 贸易类型
0 = NotSet
1 = General
2 = Fba
3 = Fbm */ 
            tradeType?: number;
         
            /* 转运单号 */ 
            transferNo?: string;
         
            /* 自定义引用编号 */ 
            referenceNo?: string;
         
            /* 自定义引用id */ 
            referenceId?: string;
         
            /* 美国海关使用的过境编号 */ 
            itNo?: string;
         
            /* 自定义的标识名称 */ 
            name?: string;
         
            /* 后段代理客户 */ 
            postAgentCustomerName?: string;
         
            /* 报关行客户Id */ 
            customsCustomerName?: string;
         
            /* 清关行客户 */ 
            customsClearanceCustomerName?: string;
         
            /* 运输条款，port_to_door、port_to_port、door_to_door、door_to_port ... */ 
            freightType?: string;
         
            /* 运输状态
0 = NotSet
1 = SellerLocation
2 = InTransitToDeparturePort
3 = DeparturePort
4 = InTransitToArrivalPort
5 = ArrivalPort
6 = InTransitToFinalDestination
7 = FinalDestination */ 
            status?: number;
         
            /* 是否作废 */ 
            isInvalid?: boolean;
         
            /* 贸易条款，可以是 EXW, FCA, FAS, FOB, CPT, CFR, CIF, CIP, DAT, DAP, DDP, or DPU. */ 
            incoterm?: string;
         
            /* 预计从起始港出发时间 */ 
            estimatedDepartureDate?: string;
         
            /* 实际从起始港出发时间 */ 
            actualDepartureDate?: string;
         
            /* 预计到达目的港时间 */ 
            estimatedArrivalDate?: string;
         
            /* 实际到达目的港时间 */ 
            actualArrivalDate?: string;
         
            /* 截关日 */ 
            estimatedClosingDate?: string;
         
            /* 是否入仓 */ 
            isCargoPutAway?: boolean;
         
            /* 快递单号 */ 
            expressNo?: string;
         
            /* 快递单号备注 */ 
            expressNoRemark?: string;
         
            /* 入库单号 */ 
            warehouseNo?: string;
         
            /* 货拉拉单号 */ 
            huoLalaOrderNo?: string;
         
            /* FBA 配送方式：整柜直送、拆箱后配送，客户自提，暂存仓库
0 = NotSet
1 = FCLDirectDelivery
2 = DeliveryAfterUnboxing
3 = SelfDelivery
4 = TemporaryWarehouse */ 
            fbaDeliveryType?: number;
         
            /* FBA配送方式备注 */ 
            fbaDeliveryTypeRemark?: string;
         
            /* 是否拼箱(LCL)。如果为 false则整箱(FCL)运输。 */ 
            isLcl?: boolean;
         
            /* 分提单号 */ 
            houseBillNo?: string;
         
            /* 主提单号 */ 
            masterBillNo?: string;
         
            /* SO 号，船东订舱号 */ 
            carrierBookingNo?: string;
         
            /* 柜号（多个时 / 分隔） */ 
            containerNos?: string;
         
            /* 柜型 （多个时 2*20GP ） */ 
            containerSizes?: string;
         
            /* 目的港 */ 
            destinationPort?: string;
         
            /* 装柜时间 */ 
            loadingDate?: string;
         
            /* 码头名称 */ 
            pierName?: string;
         
            /* 是否存在税金单，值：无，有 */ 
            hasTaxBill?: boolean;
         
            /* 付款状态，值：未付，已付 */ 
            paymentStatus?: boolean;
         
            /* 进度事件集合 */ 
            events?: any[];
         
            /* 事件平铺时间Dto */ 
            eventDetail?: FCMShipmentEventDetailDto;
         
            /* 运单编号 */ 
            shipmentNo?: string;
         
            /* 主要运输方式
0 = NotSet
1 = Ocean
2 = Air
3 = Truck
4 = Rail */ 
            transportationMode?: number;
         
            /* 下单时间（创建时间） */ 
            creationTime?: string;
         
            /* 业务员 */ 
            serviceUser?: string;
         
            /* 客户 */ 
            customerName?: string;
         
            /* 客户类型
1 = Carrier
2 = AirLine
3 = Forwarding
4 = DirectClient
5 = Trucker
6 = CustomsBroker
7 = WareHouse
8 = Storage
9 = RailWay
10 = Express
11 = Terminal
12 = Other */ 
            customerType?: number;
         
            /* 联系人 */ 
            contactName?: string;
         
            /* 目的地送货地址(item里取) */ 
            destinationAddress?: string;
         
            /* 交货方式, 客户自送、Cityocean上门取件
0 = NotSet
1 = DeliveryGoodsByMyself
2 = PickUpByCityocean */ 
            fbaPickUpMethodType?: number;
         
            /* 在起始地交货日期（货物就绪时间） */ 
            cargoReadyDate?: string;
         
            /* 交货位置id，用于拉取名称，前端无需 */ 
            originAddressId?: string;
         
            /* 交货位置 */ 
            originAddress?: string;
         
            /* 交货仓库id，用于拉取名称，前端无需 */ 
            originWarehouseId?: string;
         
            /* 交货仓库 */ 
            originWarehouse?: string;
         
            /* 国家-送货地址的国家 */ 
            country?: string;
         
            /* 品名 */ 
            commodity?: string;
         
            /* 总数量 */ 
            quantity?: FCMQuantityDto;
         
            /* 总重量 */ 
            weight?: FCMQuantityDto;
         
            /* 总体积 */ 
            volume?: FCMQuantityDto;
         
            /* 渠道 */ 
            channel?: string;
         
            /* 入仓时间 */ 
            cargoPutAwayDate?: string;
         
            /* 操作口岸 */ 
            serviceCompany?: string;
         
            /* FBA编号组（取item所有斜杠/分隔） */ 
            fbano?: string;
         
            /* 承运人 */ 
            agentCustomer?: string;
         
            /* 创建人 */ 
            creatorUser?: string;
         
            /* 是否是CSP的客户创建的 */ 
            isCustomerCreate?: boolean;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class FCMGetDeliveryInfoListInput {
        
         
            /* 搜索关键字 */ 
            searchText?: string;
         
            /* 渠道 */ 
            channel?: string;
         
            /* 开始时间 */ 
            startTime?: string;
         
            /* 结束时间 */ 
            endTime?: string;
         
            /* 是否作废，null 时获取全部，false 时只获取未作废，true 时只获取已作废 */ 
            isInvalid?: boolean;
         
            
            ids?: any[];
         
            /* 是否导出 */ 
            isExport?: boolean;
         
            /* 排序 */ 
            sorting?: string;
         
            /* 页大小 */ 
            maxResultCount?: number;
         
            /* 跳过指定条数 */ 
            skipCount?: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class FCMDeliveryInfoListItemDto {
        
         
            
            shipmentId?: string;
         
            /* 清关行客户Id */ 
            customsClearanceCustomerId?: string;
         
            /* 预计时效 */ 
            estimatedTime?: string;
         
            /* 清关行客户 */ 
            customsClearanceCustomerName?: string;
         
            /* 目的地送货地址(item里取) */ 
            destinationAddress?: string;
         
            /* 自定义引用id（取item所有斜杠/分隔） */ 
            referenceId?: string;
         
            /* FBA编号组（取item所有斜杠/分隔） */ 
            fbano?: string;
         
            /* 数量 */ 
            quantity?: any[];
         
            /* 重量 */ 
            weight?: any[];
         
            /* 体积 */ 
            volume?: any[];
         
            /* 拼接后的件数显示 */ 
            quantityString?: string;
         
            /* 拼接后的重量显示 */ 
            weightString?: string;
         
            /* 拼接后的体积显示 */ 
            volumeString?: string;
         
            /* 操作状态
0 = NoSet
1 = Pending
2 = Ordered
3 = InTransit
4 = Completed
5 = Refusal */ 
            operationStatus?: number;
         
            /* 贸易类型
0 = NotSet
1 = General
2 = Fba
3 = Fbm */ 
            tradeType?: number;
         
            /* 转运单号 */ 
            transferNo?: string;
         
            /* 自定义引用编号 */ 
            referenceNo?: string;
         
            /* 美国海关使用的过境编号 */ 
            itNo?: string;
         
            /* 自定义的标识名称 */ 
            name?: string;
         
            /* 后段代理客户 */ 
            postAgentCustomerName?: string;
         
            /* 报关行客户Id */ 
            customsCustomerName?: string;
         
            /* 运输条款，port_to_door、port_to_port、door_to_door、door_to_port ... */ 
            freightType?: string;
         
            /* 运输状态
0 = NotSet
1 = SellerLocation
2 = InTransitToDeparturePort
3 = DeparturePort
4 = InTransitToArrivalPort
5 = ArrivalPort
6 = InTransitToFinalDestination
7 = FinalDestination */ 
            status?: number;
         
            /* 是否作废 */ 
            isInvalid?: boolean;
         
            /* 贸易条款，可以是 EXW, FCA, FAS, FOB, CPT, CFR, CIF, CIP, DAT, DAP, DDP, or DPU. */ 
            incoterm?: string;
         
            /* 预计从起始港出发时间 */ 
            estimatedDepartureDate?: string;
         
            /* 实际从起始港出发时间 */ 
            actualDepartureDate?: string;
         
            /* 预计到达目的港时间 */ 
            estimatedArrivalDate?: string;
         
            /* 实际到达目的港时间 */ 
            actualArrivalDate?: string;
         
            /* 截关日 */ 
            estimatedClosingDate?: string;
         
            /* 是否入仓 */ 
            isCargoPutAway?: boolean;
         
            /* 快递单号 */ 
            expressNo?: string;
         
            /* 快递单号备注 */ 
            expressNoRemark?: string;
         
            /* 入库单号 */ 
            warehouseNo?: string;
         
            /* 货拉拉单号 */ 
            huoLalaOrderNo?: string;
         
            /* FBA 配送方式：整柜直送、拆箱后配送，客户自提，暂存仓库
0 = NotSet
1 = FCLDirectDelivery
2 = DeliveryAfterUnboxing
3 = SelfDelivery
4 = TemporaryWarehouse */ 
            fbaDeliveryType?: number;
         
            /* FBA配送方式备注 */ 
            fbaDeliveryTypeRemark?: string;
         
            /* 是否拼箱(LCL)。如果为 false则整箱(FCL)运输。 */ 
            isLcl?: boolean;
         
            /* 分提单号 */ 
            houseBillNo?: string;
         
            /* 主提单号 */ 
            masterBillNo?: string;
         
            /* SO 号，船东订舱号 */ 
            carrierBookingNo?: string;
         
            /* 柜号（多个时 / 分隔） */ 
            containerNos?: string;
         
            /* 柜型 （多个时 2*20GP ） */ 
            containerSizes?: string;
         
            /* 目的港 */ 
            destinationPort?: string;
         
            /* 装柜时间 */ 
            loadingDate?: string;
         
            /* 码头名称 */ 
            pierName?: string;
         
            /* 是否存在税金单，值：无，有 */ 
            hasTaxBill?: boolean;
         
            /* 付款状态，值：未付，已付 */ 
            paymentStatus?: boolean;
         
            /* 进度事件集合 */ 
            events?: any[];
         
            /* 事件平铺时间Dto */ 
            eventDetail?: FCMShipmentEventDetailDto;
         
            /* 运单编号 */ 
            shipmentNo?: string;
         
            /* 主要运输方式
0 = NotSet
1 = Ocean
2 = Air
3 = Truck
4 = Rail */ 
            transportationMode?: number;
         
            /* 下单时间（创建时间） */ 
            creationTime?: string;
         
            /* 业务员 */ 
            serviceUser?: string;
         
            /* 客户 */ 
            customerName?: string;
         
            /* 客户类型
1 = Carrier
2 = AirLine
3 = Forwarding
4 = DirectClient
5 = Trucker
6 = CustomsBroker
7 = WareHouse
8 = Storage
9 = RailWay
10 = Express
11 = Terminal
12 = Other */ 
            customerType?: number;
         
            /* 联系人 */ 
            contactName?: string;
         
            /* 交货方式, 客户自送、Cityocean上门取件
0 = NotSet
1 = DeliveryGoodsByMyself
2 = PickUpByCityocean */ 
            fbaPickUpMethodType?: number;
         
            /* 在起始地交货日期（货物就绪时间） */ 
            cargoReadyDate?: string;
         
            /* 交货位置id，用于拉取名称，前端无需 */ 
            originAddressId?: string;
         
            /* 交货位置 */ 
            originAddress?: string;
         
            /* 交货仓库id，用于拉取名称，前端无需 */ 
            originWarehouseId?: string;
         
            /* 交货仓库 */ 
            originWarehouse?: string;
         
            /* 国家-送货地址的国家 */ 
            country?: string;
         
            /* 品名 */ 
            commodity?: string;
         
            /* 渠道 */ 
            channel?: string;
         
            /* 入仓时间 */ 
            cargoPutAwayDate?: string;
         
            /* 操作口岸 */ 
            serviceCompany?: string;
         
            /* 承运人 */ 
            agentCustomer?: string;
         
            /* 创建人 */ 
            creatorUser?: string;
         
            /* 是否是CSP的客户创建的 */ 
            isCustomerCreate?: boolean;
         
            
            id?: string;
        
        
    }
 
    /**
     * 申请订舱
     */
    export class FCMApplyBookingsInput {
        
         
            /* 需要申请订舱的Id列表 */ 
            ids?: any[];
         
            /* SO 号，船东订舱号 */ 
            carrierBookingNo?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class FCMDeliveryInfoEditDto {
        
         
            /* 清关行客户Id */ 
            customsClearanceCustomerId?: string;
         
            /* 快递单号 */ 
            expressNo?: string;
         
            /* 快递单号备注 */ 
            expressNoRemark?: string;
         
            /* FBA 配送方式：整柜直送、拆箱后配送，客户自提，暂存仓库
0 = NotSet
1 = FCLDirectDelivery
2 = DeliveryAfterUnboxing
3 = SelfDelivery
4 = TemporaryWarehouse */ 
            fbaDeliveryType?: number;
         
            /* FBA配送方式备注 */ 
            fbaDeliveryTypeRemark?: string;
         
            /* 自定义引用编号 */ 
            referenceNo?: string;
         
            /* 预计时效 */ 
            estimatedTime?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class FCMDeliveryInfoDetailDto {
        
         
            /* 关联的运单 */ 
            shipmentId?: string;
         
            
            customerId?: string;
         
            /* 关联的 CSP 的 BookingId */ 
            customerBookingId?: string;
         
            /* 主要运输方式
0 = NotSet
1 = Ocean
2 = Air
3 = Truck
4 = Rail */ 
            transportationMode?: number;
         
            /* 贸易类型
0 = NotSet
1 = General
2 = Fba
3 = Fbm */ 
            tradeType?: number;
         
            /* 渠道 */ 
            channel?: string;
         
            /* FBA编号组（取item所有斜杠/分隔） */ 
            fbano?: string;
         
            /* 自定义引用编号 */ 
            referenceId?: string;
         
            /* 快递单号 */ 
            expressNo?: string;
         
            /* 柜号 */ 
            containerNos?: string;
         
            /* 柜型 */ 
            containerCounts?: string;
         
            /* 大船名称 */ 
            vesselName?: string;
         
            /* 航次 */ 
            voyageNo?: string;
         
            /* 品名 */ 
            commodity?: string;
         
            /* 装运的产品总数 */ 
            totalQuantity?: FCMQuantityDto;
         
            /* 装运的产品总重量 */ 
            totalWeight?: FCMQuantityDto;
         
            /* 装运的产品总体积 */ 
            totalVolume?: FCMQuantityDto;
         
            /* 备注  todo:暂时不知道哪个 */ 
            remark?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 需要导出侧唛的Id
     */
    export class FCMExportSideMarksReportInput {
        
         
            
            ids?: any[];
         
            /* 前端二维码文件的host地址，完整的
类似  http://baidu.com/qrcode.html */ 
            qrCodeHostUrl?: string;
        
        
    }
 
    /**
     * 导出的文件列表
     */
    export class FCMExportSideMarksReportOutput {
        
         
            
            fileId?: any[];
        
        
    }
 
    /**
     * 报表绑定的数据源
     */
    export class FCMSidMarkdReportData {
        
         
            /* 唯一的报表id */ 
            reportId?: string;
         
            
            customerBookingId?: string;
         
            
            bookingId?: string;
         
            /* 地址Id */ 
            addressId?: string;
         
            /* shipmentId */ 
            shipmentId?: string;
         
            /* 分公司对应的侧唛模板文件名称 */ 
            templateFileName?: string;
         
            /* 二维码地址 */ 
            url?: string;
         
            /* 显示一票业务对应的总件数；格式：CTNS +件数 */ 
            quantity?: string;
         
            /* 送货地址，此处显示的是仓库
01：如果是亚马逊仓库地址，显示仓库代码；
02 如果非亚马逊仓库地址，显示"国家"+“海外仓”； */ 
            warehouse?: string;
         
            
            deliveryAddr?: string;
         
            
            addressDetail?: string;
         
            
            warehouseCode?: string;
         
            
            warehouseId?: string;
         
            /* FBA单号 */ 
            fbaNo?: string;
         
            /* 运单号 */ 
            shipmentNo?: string;
         
            /* 国家 */ 
            country?: string;
         
            /* 客服 */ 
            customerService?: string;
         
            /* 客服电话 */ 
            customerServiceTel?: string;
         
            /* 业务所属公司 */ 
            customerServiceCompany?: string;
         
            
            exportFileName?: string;
         
            /* 是否深圳仓库 */ 
            isShenzhen?: boolean;
         
            /* 交易类型
0 = NotSet
1 = General
2 = Fba
3 = Fbm */ 
            tradeType?: number;
        
        
    }
 
    /**
     * 生成入仓单输入
     */
    export class FCMGenerateWarehouseReciptInput {
        
         
            
            ids?: any[];
        
        
    }
 
    /**
     * 生成入仓单输出
     */
    export class FCMGenerateWarehouseReciptOutput {
        
         
            
            fileIds?: any[];
        
        
    }


