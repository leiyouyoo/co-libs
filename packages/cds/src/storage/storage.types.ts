/**
 *  No Remark
 */
export class FileDto {
  fileName: string;

  fileToken: string;

  fileType?: string;

  isSuccess?: boolean;

  message?: string;

  result?: object;
}

/**
 * 导入结果
 */
export class ImportResultDto {
  /* 验证错误 */

  rowErrors?: any[];

  /* 模板错误 */

  templateErrors?: any[];

  /* 其它消息信息 */

  message?: string;

  /* 行数据总条数 */

  totalRowCount?: number;

  /* 行数据验证错误条数 */

  errorRowCount?: number;

  /* 导入异常信息 */

  exception?: object;

  /* 是否存在导入错误 */

  hasError?: boolean;
}

/**
 * 产品导出
 */
export class ProductExportInput {
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
export class OrderExportInput {
  /* 采购订单Id集合 */

  ids?: any[];
}

/**
 *  No Remark
 */
export class PreShipmentExportInput {
  isCustomerCreate?: boolean;

  /*
0 = NotSet
1 = Ocean
2 = Air
3 = Truck
4 = Rail */

  transportationMode?: number;

  creationTime?: string;

  serviceUserId?: number;

  customerId?: string;

  /*
0 = NotSet
1 = DeliveryGoodsByMyself
2 = PickUpByCityocean */

  fbaPickUpMethodType?: number;

  cargoPutAwayDate?: string;

  serviceCompanyId?: string;

  agentCustomerId?: string;

  contact?: string;

  shipmentNo?: string;

  destinationAddress?: string;

  originAddress?: string;

  originWarehouse?: string;

  country?: string;

  channel?: string;

  fbaNo?: string;

  creatorUser?: string;

  ids?: any[];

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
export class GetShipmentListInput {
  searchText?: string;

  agentCustomerIds?: any[];

  channel?: string;

  startTime?: string;

  endTime?: string;

  ids?: any[];

  isExport?: boolean;

  /* 排序 */

  sorting?: string;

  /* 页大小 */

  maxResultCount?: number;

  /* 跳过指定条数 */

  skipCount?: number;
}

export class GetDeliveryInfoListInput {
  searchText?: string;

  channel?: string;

  startTime?: string;

  endTime?: string;

  ids?: any[];

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
export class UploadResultDto {
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
export class GetFileInfoDto {
  /* 文件访问ID */

  fileId?: string;

  /* 文件下载根地址 */

  url?: string;

  /* 文件名 */

  fileName?: string;

  /* 文件扩展名 */

  extensionName?: string;

  creationTime?: string;
}

/**
 *  No Remark
 */
export class ChunkUploadResultDto {
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
export class ICPUploadFileInput {
  fileName?: string;

  fileContent?: string;
}

/**
 * 提供给ICP下载
 */
export class ICPBatchDownloadInput {
  /* 文件Ids */

  fileIds?: any[];
}

/**
 * 提供给ICP批量下载返回内容
 */
export class ICPBatchDownloadResult {
  /* 文件Id */

  fileId?: string;

  /* 文件名 */

  fileName?: string;

  /* 文件扩展名 */

  extensionName?: string;

  /* 文件字节流 */

  fileContent?: string;
}
