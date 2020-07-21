 
    /**
     *  No Remark 
     */
    export class QuantityDto {
        
         
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
    export class ShipmentDto {
        
         
            
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
            totalQuantity?: QuantityDto;
         
            /* 装运的产品总重量 */ 
            totalWeight?: QuantityDto;
         
            /* 装运的产品总体积 */ 
            totalVolume?: QuantityDto;
         
            /* 备注  todo:暂时不知道哪个 */ 
            remark?: string;
         
            
            id?: string;
        
        
    }
 
    /**
     * 预报单查询模型
     */
    export class PreShipmentListInput {
        
         
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
     *  No Remark 
     */
    export class PagedResultDto<T> {
        
         
            
            totalCount: number;
         
            
            items: T[];
        
        
    }
 
    /**
     * booking相关信息
     */
    export class BookingDetailDto {
        
         
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
    export class OceanShipmentDetailDto {
        
         
            /* SO 号，船东订舱号 */ 
            carrierBookingNo?: string;
        
        
    }
 
    /**
     * FBA信息Dto  （受理才填）
     */
    export class FbaShipmentDetailDto {
        
         
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
    export class CreateOrUpdateShipmentInput {
        
         
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
         
            /* 业务员id */ 
            serviceUserId?: number;
         
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
            booking?: BookingDetailDto;
         
            /* 海运业务明细 */ 
            oceanShipment?: OceanShipmentDetailDto;
         
            /* FBA信息 */ 
            fbaShipment?: FbaShipmentDetailDto;
         
            /* Shipment 中的产品信息 */ 
            lineItems?: any[];
         
            /* 地址分组产品信息 */ 
            addressItems?: any[];
         
            
            id?: string;
        
        
    }
 
    /**
     * 入仓模型
     */
    export class WarehousingDto {
        
         
            /* 入仓时间 */ 
            warehousingDate: string;
         
            /* shipmentId */ 
            shipmentIds?: any[];
        
        
    }
 
    /**
     * 用于作废或取消作废多个Shipment的输入参数
     */
    export class ChangeShipmentInvalidStatusInput {
        
         
            /* 需要变更的 ShipmentId 集合 */ 
            shipmentIds?: any[];
         
            /* 是否作废，true 作废，false 取消作废 */ 
            isSetInvalid?: boolean;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class SetShipmentPostAgentCustomerInput {
        
         
            /* 设置后段代理的 ShipmentId 集合 */ 
            shipmentIds?: any[];
         
            /* 后段代理客户Id */ 
            postAgentCustomerId?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class GetShipmentListInput {
        
         
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
    export class GetDeliveryInfoListInput {
        
         
            /* 搜索关键字 */ 
            searchText?: string;
         
            /* 渠道 */ 
            channel?: string;
         
            /* 开始时间 */ 
            startTime?: string;
         
            /* 结束时间 */ 
            endTime?: string;
         
            
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
     * 申请订舱
     */
    export class ApplyBookingsInput {
        
         
            /* 需要申请订舱的Id列表 */ 
            ids?: any[];
         
            /* SO 号，船东订舱号 */ 
            carrierBookingNo?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class AddressDto {
        
         
            
            id?: string;
         
            
            isForeign?: boolean;
         
            
            name?: string;
         
            /* 城市 */ 
            city?: string;
         
            /* 省/洲 */ 
            province?: string;
         
            /* 国家 */ 
            country?: string;
         
            /* 如果是港口，则为UN/LOCODE（联合国贸易和运输地点代码） */ 
            unlocode?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class DeliveryInfoDto {
        
         
            /* 关联的 Shipment */ 
            shipmentId?: string;
         
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
         
            /* 配送地址 */ 
            address?: AddressDto;
         
            
            id?: string;
        
        
    }
 
    /**
     * 需要导出侧唛的Id
     */
    export class ExportSideMarksReportInput {
        
         
            
            ids?: any[];
         
            /* 前端二维码文件的host地址，完整的
类似  http://baidu.com/qrcode.html */ 
            qrCodeHostUrl?: string;
        
        
    }
 
    /**
     * 导出的文件列表
     */
    export class ExportSideMarksReportOutput {
        
         
            
            fileId?: any[];
        
        
    }
 
    /**
     * 侧唛数据
     */
    export class SideMarksData {
        
         
            
            id?: string;
         
            /* 仓库Id */ 
            warehouseId?: string;
         
            /* 件数 */ 
            quantity?: number;
         
            
            shipmentNo?: string;
         
            /* 仓库地址 */ 
            warehouse?: string;
         
            /* 国家 */ 
            country?: string;
         
            /* 仓库代码 */ 
            warehouseCode?: string;
         
            /* 交易类型
0 = NotSet
1 = General
2 = Fba
3 = Fbm */ 
            tradeType?: number;
         
            /* FBA No */ 
            fbaNo?: string;
         
            /* 客服 */ 
            customerService?: string;
         
            /* 客服电话 */ 
            customerServiceTel?: string;
         
            /* 业务所属公司 */ 
            customerServiceCompany?: string;
         
            /* 送货地址 */ 
            deliveryAddr?: string;
         
            /* 详细地址 */ 
            addressDetail?: string;
        
        
    }
 
    /**
     * 生成入仓单输入
     */
    export class GenerateWarehouseReciptInput {
        
         
            
            ids?: any[];
        
        
    }
 
    /**
     * 生成入仓单输出
     */
    export class GenerateWarehouseReciptOutput {
        
         
            
            fileIds?: any[];
        
        
    }


