/**
 *  No Remark
 */
export class StorageFileDto {
  fileName: string;

  fileToken: string;

  fileType?: string;

  isSuccess?: boolean;

  message?: string;

  result?: object;
}

/**
 *  No Remark
 */
export class StorageBatchDownloadClearanceInvoiceDto {
  ids?: any[];
}

/**
 * 产品导出
 */
export class StorageProductExportInput {
  /* 国家Id */

  regionId?: string;

  /* 搜索关键字 */

  searchText?: string;

  /* 产品Id集合 */

  ids?: any[];
}

/**
 * 采购订单导出
 */
export class StorageOrderExportInput {
  /* 采购订单Id集合 */

  ids?: any[];
}

/**
 * 账单导出
 */
export class StorageBillExportInput {
  /* 是否英文 */

  isEnglish?: boolean;

  /* 账单Id集合 */

  ids?: any[];
}

/**
 *  No Remark
 */
export class StorageObject {}

/**
 * 导入结果
 */
export class StorageImportResultDto<T> {
  /* Data */

  data: object;

  /* 验证错误 */

  rowErrors: T[];

  /* 模板错误 */

  templateErrors: T[];

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
 *  No Remark
 */
export class StorageExportPackingListInput {
  /* CSP BookingId 集合 */

  bookingIds?: any[];
}

/**
 * 预报单查询模型
 */
export class StoragePreShipmentExportInput {
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

  sorting?: string;

  maxResultCount?: number;

  skipCount?: number;
}

/**
 *  No Remark
 */
export class StorageGetShipmentListInput {
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

  sorting?: string;

  maxResultCount?: number;

  skipCount?: number;
}

/**
 *  No Remark
 */
export class StorageGetDeliveryInfoListInput {
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

  sorting?: string;

  maxResultCount?: number;

  skipCount?: number;
}

/**
 *  No Remark
 */
export class StorageUploadResultDto {
  /* 文件访问ID */

  fileId?: string;

  /* 文件下载根地址 */

  url?: string;

  /* 文件名 */

  fileName?: string;

  /* 文件扩展名 */

  extensionName?: string;
}

/**
 *  No Remark
 */
export class StorageGetFileInfoDto {
  /* 文件访问ID */

  fileId?: string;

  /* 文件下载根地址 */

  url?: string;

  /* 文件名 */

  fileName?: string;

  /* 文件扩展名 */

  extensionName?: string;

  /* 创建时间 */

  creationTime?: string;
}

/**
 *  No Remark
 */
export class StoragePagedResultDto<T> {
  totalCount: number;

  items: T[];
}

/**
 *  No Remark
 */
export class StorageChunkUploadResultDto {
  /* 是否合并成功 */

  mergeOk?: boolean;

  /* 第几片 */

  chunkIndex?: number;

  /* 文件访问ID */

  fileId?: string;

  /* 文件下载根地址 */

  url?: string;

  /* 文件名 */

  fileName?: string;

  /* 文件扩展名 */

  extensionName?: string;
}

/**
 *  No Remark
 */
export class StorageICPUploadFileInput {
  fileName?: string;

  fileContent?: string;
}

/**
 * 提供给ICP下载
 */
export class StorageICPBatchDownloadInput {
  /* 文件Ids */

  fileIds?: any[];
}

/**
 * 提供给ICP批量下载返回内容
 */
export class StorageICPBatchDownloadResult {
  /* 文件Id */

  fileId?: string;

  /* 文件名 */

  fileName?: string;

  /* 文件扩展名 */

  extensionName?: string;

  /* 文件字节流 */

  fileContent?: string;
}

/**
 *  No Remark
 */
export class StorageListResultDto<T> {
  items: T[];
}
