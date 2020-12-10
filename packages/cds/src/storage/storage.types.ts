 
    /**
     *  No Remark 
     */
    export class ChangeAttachmentTypeInput {
        
         
            /* 附件类型
0 = Other
1 = OSO
2 = TRK
3 = CF
4 = SI
5 = ARR
6 = MBL
7 = HBL
8 = SID
9 = ISF
11 = AR
12 = AP
13 = DC
14 = ASO
15 = BKG
16 = LGTLX
17 = LGPKG
18 = LGDC
19 = LGPBL
20 = LGABL
21 = LGMBL
22 = LGPKG1
23 = LGDC1
24 = LGABL1
25 = LGMBL1
26 = LGTLX1
27 = AMS
28 = AN
29 = SIMBL
30 = SIHBL
31 = AN_C
32 = NRAS
33 = QuotedPrice
34 = POD
35 = AC
36 = BR
37 = WFF
38 = CI
39 = PL
40 = PO
41 = DM
43 = SideMarks
44 = WarehouseRecipt
45 = TaxBill
46 = SignReceipt
47 = BookingNote */ 
            attachmentType: number;
         
            
            id: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class GetAllAttachmentListInput {
        
         
            /* 业务Id集合 */ 
            businessIds: any[];
         
            /* 附件类型
0 = Other
1 = OSO
2 = TRK
3 = CF
4 = SI
5 = ARR
6 = MBL
7 = HBL
8 = SID
9 = ISF
11 = AR
12 = AP
13 = DC
14 = ASO
15 = BKG
16 = LGTLX
17 = LGPKG
18 = LGDC
19 = LGPBL
20 = LGABL
21 = LGMBL
22 = LGPKG1
23 = LGDC1
24 = LGABL1
25 = LGMBL1
26 = LGTLX1
27 = AMS
28 = AN
29 = SIMBL
30 = SIHBL
31 = AN_C
32 = NRAS
33 = QuotedPrice
34 = POD
35 = AC
36 = BR
37 = WFF
38 = CI
39 = PL
40 = PO
41 = DM
43 = SideMarks
44 = WarehouseRecipt
45 = TaxBill
46 = SignReceipt
47 = BookingNote */ 
            attachmentType: number;
         
            /* 是否过滤认证 */ 
            ignoreAuthorize: boolean;
         
            /* 附件角色 */ 
            roles: any[];
        
        
    }
 
    /**
     * 用于附件列表显示的 Dto
     */
    export class AttachmentListDto {
        
         
            /* 上传人 */ 
            uploadBy: string;
         
            /* 上传时间 */ 
            creationTime: string;
         
            /* 上传人Id */ 
            creatorUserId: number;
         
            /* 附件类型字面值 */ 
            typeString: string;
         
            /* 是否公开 */ 
            isPublic: boolean;
         
            /* CO.Storage.Domain.Attachments.Enums.AttachmentRoles[] 允许删除附件的角色，必需存在于 CO.Storage.Application.Attachments.Dto.AttachmentDto.CanViewRoles，（CreatorUser 始终有权限删除） */ 
            canDeleteRoles: any[];
         
            /* CO.Storage.Domain.Attachments.Enums.AttachmentRoles[] 允许查看附件的角色，仅当 CO.Storage.Application.Attachments.Dto.AttachmentDto.IsPublic 为 false 时有效（CreatorUser 始终有权限查看） */ 
            canViewRoles: any[];
         
            /* Id */ 
            id: string;
         
            /* 业务id（如是booking，则传booking的id） */ 
            businessId: string;
         
            /* 业务类型
0 = Quote
1 = Booking
2 = Shipment
3 = Order
4 = Product
5 = Billing
6 = Invoice */ 
            businessType: number;
         
            /* 附件类型
0 = Other
1 = OSO
2 = TRK
3 = CF
4 = SI
5 = ARR
6 = MBL
7 = HBL
8 = SID
9 = ISF
11 = AR
12 = AP
13 = DC
14 = ASO
15 = BKG
16 = LGTLX
17 = LGPKG
18 = LGDC
19 = LGPBL
20 = LGABL
21 = LGMBL
22 = LGPKG1
23 = LGDC1
24 = LGABL1
25 = LGMBL1
26 = LGTLX1
27 = AMS
28 = AN
29 = SIMBL
30 = SIHBL
31 = AN_C
32 = NRAS
33 = QuotedPrice
34 = POD
35 = AC
36 = BR
37 = WFF
38 = CI
39 = PL
40 = PO
41 = DM
43 = SideMarks
44 = WarehouseRecipt
45 = TaxBill
46 = SignReceipt
47 = BookingNote */ 
            attachmentType: number;
         
            /* 文件id(上传到文件服务器后返回) */ 
            fileId: string;
         
            /* 文件名称(上传到文件服务器后返回) */ 
            fileName: string;
         
            /* 文件扩展名(上传到文件服务器后返回) */ 
            extensionName: string;
        
        
    }
 
    /**
     * 主键类型默认为整形的数据传输对象基类
     */
    export class CoEntityDto {
        
         
            
            id: string;
        
        
    }
 
    /**
     * 附件基本信息 Dto
     */
    export class AttachmentDto {
        
         
            /* 是否公开 */ 
            isPublic: boolean;
         
            /* CO.Storage.Domain.Attachments.Enums.AttachmentRoles[] 允许删除附件的角色，必需存在于 CO.Storage.Application.Attachments.Dto.AttachmentDto.CanViewRoles，（CreatorUser 始终有权限删除） */ 
            canDeleteRoles: any[];
         
            /* CO.Storage.Domain.Attachments.Enums.AttachmentRoles[] 允许查看附件的角色，仅当 CO.Storage.Application.Attachments.Dto.AttachmentDto.IsPublic 为 false 时有效（CreatorUser 始终有权限查看） */ 
            canViewRoles: any[];
         
            /* Id */ 
            id: string;
         
            /* 业务id（如是booking，则传booking的id） */ 
            businessId: string;
         
            /* 业务类型
0 = Quote
1 = Booking
2 = Shipment
3 = Order
4 = Product
5 = Billing
6 = Invoice */ 
            businessType: number;
         
            /* 附件类型
0 = Other
1 = OSO
2 = TRK
3 = CF
4 = SI
5 = ARR
6 = MBL
7 = HBL
8 = SID
9 = ISF
11 = AR
12 = AP
13 = DC
14 = ASO
15 = BKG
16 = LGTLX
17 = LGPKG
18 = LGDC
19 = LGPBL
20 = LGABL
21 = LGMBL
22 = LGPKG1
23 = LGDC1
24 = LGABL1
25 = LGMBL1
26 = LGTLX1
27 = AMS
28 = AN
29 = SIMBL
30 = SIHBL
31 = AN_C
32 = NRAS
33 = QuotedPrice
34 = POD
35 = AC
36 = BR
37 = WFF
38 = CI
39 = PL
40 = PO
41 = DM
43 = SideMarks
44 = WarehouseRecipt
45 = TaxBill
46 = SignReceipt
47 = BookingNote */ 
            attachmentType: number;
         
            /* 文件id(上传到文件服务器后返回) */ 
            fileId: string;
         
            /* 文件名称(上传到文件服务器后返回) */ 
            fileName: string;
         
            /* 文件扩展名(上传到文件服务器后返回) */ 
            extensionName: string;
        
        
    }
 
    /**
     * 用于批量创建附件的 Dto
     */
    export class BatchCreateAttachmentInput {
        
         
            /* Gets or sets the items. */ 
            items: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class FileDto {
        
         
            
            fileType: string;
         
            
            isSuccess: boolean;
         
            
            message: string;
         
            
            result: object;
         
            
            fileName?: string;
         
            
            fileToken?: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class BatchDownloadClearanceInvoiceDto {
        
         
            
            ids: any[];
        
        
    }
 
    /**
     * 导入结果
     */
    export class ImportResultDto {
        
         
            /* 验证错误 */ 
            rowErrors: any[];
         
            /* 模板错误 */ 
            templateErrors: any[];
         
            /* 其它消息信息 */ 
            message: string;
         
            /* 行数据总条数 */ 
            totalRowCount: number;
         
            /* 行数据验证错误条数 */ 
            errorRowCount: number;
         
            /* 导入异常信息 */ 
            exception: object;
         
            /* 是否存在导入错误 */ 
            hasError: boolean;
        
        
    }
 
    /**
     * 产品导出
     */
    export class ProductExportInput {
        
         
            /* 国家Id */ 
            regionId: string;
         
            /* 搜索关键字 */ 
            searchText: string;
         
            /* 产品Id集合 */ 
            ids: any[];
        
        
    }
 
    /**
     * 采购订单导出
     */
    export class OrderExportInput {
        
         
            /* 采购订单Id集合 */ 
            ids: any[];
        
        
    }
 
    /**
     * 账单导出
     */
    export class BillExportInput {
        
         
            /* 是否英文 */ 
            isEnglish: boolean;
         
            /* 账单Id集合 */ 
            ids: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class Object {
        
    }
 
    /**
     *  No Remark 
     */
    export class ExportPackingListInput {
        
         
            /* CSP BookingId 集合 */ 
            businessIds: any[];
        
        
    }
 
    /**
     * 预报单查询模型
     */
    export class PreShipmentExportInput {
        
         
            /* 是否是CSP的客户创建的 */ 
            isCustomerCreate: boolean;
         
            /* 运输方式，枚举下拉
0 = NotSet
1 = Ocean
2 = Air
3 = Truck
4 = Rail */ 
            transportationMode: number;
         
            /* 下单日期 */ 
            creationTime: string;
         
            /* 业务员 */ 
            serviceUserId: number;
         
            /* 客户id */ 
            customerId: string;
         
            /* 交货方式，枚举下拉
0 = NotSet
1 = DeliveryGoodsByMyself
2 = PickUpByCityocean */ 
            fbaPickUpMethodType: number;
         
            /* 操作口岸 */ 
            serviceCompanyId: string;
         
            /* 承运人（代理）客户Id，如 Cityocean ... */ 
            agentCustomerId: string;
         
            /* 联系人，模糊 */ 
            contactName: string;
         
            /* 运单号，模糊 */ 
            shipmentNo: string;
         
            /* 送货地址，模糊 */ 
            destinationAddress: string;
         
            /* 交货位置，模糊 */ 
            originAddress: string;
         
            /* 交货仓库，模糊 */ 
            originWarehouse: string;
         
            /* 国家，模糊 */ 
            country: string;
         
            /* 渠道，模糊 */ 
            channel: string;
         
            /* FBA编号，模糊 */ 
            fbaNo: string;
         
            /* 创建人，模糊 */ 
            creatorUser: string;
         
            
            ids: any[];
         
            /* 是否导出 */ 
            isExport: boolean;
         
            /* 排序 */ 
            sorting: string;
         
            /* 页大小 */ 
            maxResultCount: number;
         
            /* 跳过指定条数 */ 
            skipCount: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class GetShipmentListInput {
        
         
            /* 搜索关键字 */ 
            searchText: string;
         
            /* 承运人 Ids */ 
            agentCustomerIds: any[];
         
            /* 渠道 */ 
            channel: string;
         
            /* 开始时间 */ 
            startTime: string;
         
            /* 结束时间 */ 
            endTime: string;
         
            
            ids: any[];
         
            /* 是否导出 */ 
            isExport: boolean;
         
            /* 排序 */ 
            sorting: string;
         
            /* 页大小 */ 
            maxResultCount: number;
         
            /* 跳过指定条数 */ 
            skipCount: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class GetDeliveryInfoListInput {
        
         
            /* 搜索关键字 */ 
            searchText: string;
         
            /* 渠道 */ 
            channel: string;
         
            /* 开始时间 */ 
            startTime: string;
         
            /* 结束时间 */ 
            endTime: string;
         
            
            ids: any[];
         
            /* 是否导出 */ 
            isExport: boolean;
         
            /* 排序 */ 
            sorting: string;
         
            /* 页大小 */ 
            maxResultCount: number;
         
            /* 跳过指定条数 */ 
            skipCount: number;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class ExportShippingOrdersInput {
        
         
            
            shippingOrderIds: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class ExportContainersInput {
        
         
            
            shipmentId: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class UploadResultDto {
        
         
            /* 文件访问ID */ 
            fileId: string;
         
            /* 文件下载根地址 */ 
            url: string;
         
            /* 文件名 */ 
            fileName: string;
         
            /* 文件扩展名 */ 
            extensionName: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class GetFileInfoDto {
        
         
            /* 文件访问ID */ 
            fileId: string;
         
            /* 文件下载根地址 */ 
            url: string;
         
            /* 文件名 */ 
            fileName: string;
         
            /* 文件扩展名 */ 
            extensionName: string;
         
            /* 创建时间 */ 
            creationTime: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class GetFileInfosInput {
        
         
            
            ids: any[];
        
        
    }
 
    /**
     *  No Remark 
     */
    export class ChunkUploadResultDto {
        
         
            /* 是否合并成功 */ 
            mergeOk: boolean;
         
            /* 第几片 */ 
            chunkIndex: number;
         
            /* 文件访问ID */ 
            fileId: string;
         
            /* 文件下载根地址 */ 
            url: string;
         
            /* 文件名 */ 
            fileName: string;
         
            /* 文件扩展名 */ 
            extensionName: string;
        
        
    }
 
    /**
     *  No Remark 
     */
    export class ICPUploadFileInput {
        
         
            
            fileName: string;
         
            
            fileContent: string;
        
        
    }
 
    /**
     * 提供给ICP下载
     */
    export class ICPBatchDownloadInput {
        
         
            /* 文件Ids */ 
            fileIds: any[];
        
        
    }
 
    /**
     * 提供给ICP批量下载返回内容
     */
    export class ICPBatchDownloadResult {
        
         
            /* 文件Id */ 
            fileId: string;
         
            /* 文件名 */ 
            fileName: string;
         
            /* 文件扩展名 */ 
            extensionName: string;
         
            /* 文件字节流 */ 
            fileContent: string;
        
        
    }


