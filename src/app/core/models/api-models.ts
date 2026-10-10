/* Auto-generated from updated openapi_swagger.json */

export interface ADGetFunctionRoleByUserReq {
  uPharmaID?: number;
  Token?: string;
}

export interface ADGetFunctionRoleByUserRes {
  RespCode?: number;
  RespText?: string;
  FunctionIDStrLst?: Record<string, any>[];
}

export interface ADGetFunctionRoleLstReq {
  uPharmaID?: number;
  Token?: string;
  DefineID?: number;
}

export interface ADGetFunctionRoleLstRes {
  RespCode?: number;
  RespText?: string;
  FunctionRoleLst?: Record<string, any>[];
}

export interface ADGetProductUnsoldLstReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  TimeStart?: string;
}

export interface ADGetProductUnsoldLstRes {
  RespCode?: number;
  RespText?: string;
  ProductUnsoldLst?: Record<string, any>[];
}

export interface ADGetReportImportProductLstReq {
  uPharmaID?: number;
  Token?: string;
  ViewAll?: boolean;
}

export interface ADGetReportImportProductLstRes {
  RespCode?: number;
  RespText?: string;
  ReportImportProductLst?: Record<string, any>[];
}

export interface ADGetReportSalesLotIndexLstReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface ADGetReportSalesLotIndexLstRes {
  RespCode?: number;
  RespText?: string;
  ReportSalesLotIndexLst?: Record<string, any>[];
}

export interface ADUnlockInvoiceReq {
  uPharmaID?: number;
  Token?: string;
  TypeLock?: number;
  Parameter1?: string;
  Parameter2?: string;
  Parameter3?: string;
  Parameter4?: string;
  Parameter5?: string;
  Parameter6?: string;
  Parameter7?: string;
  Parameter8?: string;
  Parameter9?: string;
  Parameter10?: string;
  Parameter11?: string;
}

export interface ADUnlockInvoiceRes {
  RespCode?: number;
  RespText?: string;
}

export interface ADUpdateFunctionRoleLstReq {
  uPharmaID?: number;
  Token?: string;
  DefineID?: number;
  FunctionRoleLst?: Record<string, any>[];
}

export interface ADUpdateFunctionRoleLstRes {
  RespCode?: number;
  RespText?: string;
}

export interface CRMUpdateBuyerDiagnoseReq {
  uPharmaID?: number;
  Token?: string;
  RowID?: number;
  Pathological?: string;
  Diagnose?: string;
}

export interface CRMUpdateBuyerDiagnoseRes {
  RespCode?: number;
  RespText?: string;
}

export interface DraftGetTransferOrderLineByShopReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
}

export interface DraftGetTransferOrderLineByShopRes {
  RespCode?: number;
  RespText?: string;
  DraftTransferOrderLineLst?: Record<string, any>[];
}

export interface DraftModifyTransferOrderLineReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  ProductID?: string;
  Quantity?: number;
  Note?: string;
}

export interface DraftModifyTransferOrderLineRes {
  RespCode?: number;
  RespText?: string;
}

export interface FASTCreateBankCreditReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface FASTCreateBankCreditRes {
  RespCode?: number;
  RespText?: string;
  DMSID?: string;
}

export interface FASTCreateBankDebitReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
  AmountAdjust?: number;
  ConnectNote?: string;
}

export interface FASTCreateBankDebitRes {
  RespCode?: number;
  RespText?: string;
  DMSID?: string;
}

export interface FASTDelBankCreditReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface FASTDelBankCreditRes {
  RespCode?: number;
  RespText?: string;
}

export interface FASTDelBankDebitReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface FASTDelBankDebitRes {
  RespCode?: number;
  RespText?: string;
}

export interface FASTGetHistoryUpImportDocReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
  TypeDoc?: number;
}

export interface FASTGetHistoryUpImportDocRes {
  RespCode?: number;
  RespText?: string;
  HistoryUpImportDocLst?: Record<string, any>[];
}

export interface FastDelUpImportStoreReq {
  uPharmaID?: number;
  Token?: string;
  DMSID?: string;
}

export interface FastDelUpImportStoreRes {
  RespCode?: number;
  RespText?: string;
}

export interface FastDelUpImportSystemReq {
  uPharmaID?: number;
  Token?: string;
  DMSID?: string;
}

export interface FastDelUpImportSystemRes {
  RespCode?: number;
  RespText?: string;
}

export interface FastDelUpSalesInvoiceReq {
  uPharmaID?: number;
  Token?: string;
  DMSID?: string;
}

export interface FastDelUpSalesInvoiceRes {
  RespCode?: number;
  RespText?: string;
}

export interface FastGetCustomerSalesReq {
  uPharmaID?: number;
  Token?: string;
}

export interface FastGetCustomerSalesRes {
  SupplierLst?: Record<string, any>[];
  RespCode?: number;
  RespText?: string;
}

export interface FastGetHisUpInvoiceDocReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface FastGetHisUpInvoiceDocRes {
  RespCode?: number;
  RespText?: string;
  HisUpInvoiceDocLst?: Record<string, any>[];
}

export interface FastGetHisUpInvoiceLineReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
}

export interface FastGetHisUpInvoiceLineRes {
  RespCode?: number;
  RespText?: string;
  HisUpInvoiceLineLst?: Record<string, any>[];
}

export interface FastGetImportStoreReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface FastGetImportStoreRes {
  ImportStoreHeaderLst?: Record<string, any>[];
  RespCode?: number;
  RespText?: string;
}

export interface FastGetImportSysHeaderLstReq {
  uPharmaID?: number;
  Token?: string;
  Center?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface FastGetImportSysHeaderLstRes {
  RespCode?: number;
  RespText?: string;
  ImportSysHeaderLst?: Record<string, any>[];
}

export interface FastGetImportSysLineLstReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface FastGetImportSysLineLstRes {
  RespCode?: number;
  RespText?: string;
  ImportSysLineLst?: Record<string, any>[];
}

export interface FastGetImportSystemReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface FastGetImportSystemRes {
  ImportSysHeaderLst?: Record<string, any>[];
  RespCode?: number;
  RespText?: string;
}

export interface FastGetInventoryByCenterReq {
  uPharmaID?: number;
  Token?: string;
  Center?: string;
  CheckDate?: boolean;
  DateGet?: string;
}

export interface FastGetInventoryByCenterRes {
  RespCode?: number;
  RespText?: string;
  InventoryLst?: Record<string, any>[];
}

export interface FastGetInventoryByShopReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  CheckDate?: boolean;
  DateGet?: string;
}

export interface FastGetInventoryByShopRes {
  RespCode?: number;
  RespText?: string;
  InventoryLst?: Record<string, any>[];
}

export interface FastGetProductImportByIDReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
}

export interface FastGetProductImportByIDRes {
  RespCode?: number;
  RespText?: string;
  DataProductImportLst?: Record<string, any>[];
}

export interface FastGetProductSaleByDMSIDReq {
  uPharmaID?: number;
  Token?: string;
  DMSID?: string;
}

export interface FastGetProductSaleByDMSIDRes {
  RespCode?: number;
  RespText?: string;
  DataProductSalesLst?: Record<string, any>[];
}

export interface FastGetProductSaleByDocsReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  HeaderIDLst?: string;
}

export interface FastGetProductSaleByDocsRes {
  RespCode?: number;
  RespText?: string;
  DataProductSalesLst?: Record<string, any>[];
  SupplierInfo?: any;
}

export interface FastGetProductTransferByIDReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
  TranType?: string;
  Genuine?: number;
}

export interface FastGetProductTransferByIDRes {
  RespCode?: number;
  RespText?: string;
  DataProductTransferLst?: Record<string, any>[];
}

export interface FastGetSalesHeaderReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface FastGetSalesHeaderRes {
  SalesHeaderLst?: Record<string, any>[];
  RespCode?: number;
  RespText?: string;
}

export interface FastUpImportStoreReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
  TranType?: string;
  Genuine?: number;
}

export interface FastUpImportStoreRes {
  RespCode?: number;
  RespText?: string;
}

export interface FastUpImportSystemReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
}

export interface FastUpImportSystemRes {
  RespCode?: number;
  RespText?: string;
}

export interface FastUpSalesInvoiceByIDReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
}

export interface FastUpSalesInvoiceByIDRes {
  RespCode?: number;
  RespText?: string;
}

export interface FastUpSalesInvoiceReq {
  uPharmaID?: number;
  Token?: string;
  HeaderIDLst?: string;
  SupplierInfo?: any;
}

export interface FastUpSalesInvoiceRes {
  RespCode?: number;
  RespText?: string;
}

export interface KKApproveHandingOverReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
  Note?: string;
}

export interface KKApproveHandingOverRes {
  RespCode?: number;
  RespText?: string;
}

export interface KKApproveInventoryByStoreReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface KKApproveInventoryByStoreRes {
  RespCode?: number;
  RespText?: string;
}

export interface KKApproveInventoryInfoReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
  Note?: string;
}

export interface KKApproveInventoryInfoRes {
  RespCode?: number;
  RespText?: string;
}

export interface KKApproveReceiptHeaderReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
  AmountCashMiss?: number;
  AmountCardMiss?: number;
  AmountCKMiss?: number;
  AmountVNPayMiss?: number;
  AmountVNPayCardMiss?: number;
  AmountMOMOMiss?: number;
  CheckCash?: boolean;
  CheckCard?: boolean;
  CheckCK?: boolean;
  CheckVNPay?: boolean;
  CheckVNPayCard?: boolean;
  CheckMOMO?: boolean;
  Note?: string;
}

export interface KKApproveReceiptHeaderRes {
  RespCode?: number;
  RespText?: string;
}

export interface KKCheckLotCodeIndexReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
  LotRowID?: number;
  QuantityCheck?: number;
  Note?: string;
  Description?: string;
}

export interface KKCheckLotCodeIndexRes {
  RespCode?: number;
  RespText?: string;
  Status?: number;
  Quantity?: number;
}

export interface KKCreateHandingOverReq {
  uPharmaID?: number;
  Token?: string;
  HandingOverInfo?: any;
}

export interface KKCreateHandingOverRes {
  RespCode?: number;
  RespText?: string;
}

export interface KKCreateInventoryByKTReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  InventoryLotLst?: Record<string, any>[];
}

export interface KKCreateInventoryByKTRes {
  RespCode?: number;
  RespText?: string;
  InventoryHeaderInfo?: any;
}

export interface KKCreateInventoryBySellerReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  InventoryLotLst?: Record<string, any>[];
}

export interface KKCreateInventoryBySellerRes {
  RespCode?: number;
  RespText?: string;
  InventoryHeaderInfo?: any;
}

export interface KKCreateInventoryByStoreReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  Description?: string;
}

export interface KKCreateInventoryByStoreRes {
  RespCode?: number;
  RespText?: string;
  DocumentID?: string;
}

export interface KKCreateInventoryInfoReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  QuantityProduct?: number;
}

export interface KKCreateInventoryInfoRes {
  RespCode?: number;
  RespText?: string;
  InventoryHeaderInfo?: any;
}

export interface KKCreateInventoryLineByStoreReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
  InventoryLotLst?: Record<string, any>[];
}

export interface KKCreateInventoryLineByStoreRes {
  RespCode?: number;
  RespText?: string;
  InventoryHeaderInfo?: any;
}

export interface KKCreateReceiptHeaderReq {
  uPharmaID?: number;
  Token?: string;
  ReceiptHeaderInfo?: any;
}

export interface KKCreateReceiptHeaderRes {
  RespCode?: number;
  RespText?: string;
}

export interface KKDelHandingOverReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface KKDelHandingOverRes {
  RespCode?: number;
  RespText?: string;
}

export interface KKDelInventoryInfoReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
}

export interface KKDelInventoryInfoRes {
  RespCode?: number;
  RespText?: string;
}

export interface KKDelReceiptHeaderReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface KKDelReceiptHeaderRes {
  RespCode?: number;
  RespText?: string;
}

export interface KKGetBankStatementByTimeReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface KKGetBankStatementByTimeRes {
  RespCode?: number;
  RespText?: string;
  BankStatementLst?: Record<string, any>[];
}

export interface KKGetEmployeeForReceiptReq {
  uPharmaID?: number;
  Token?: string;
}

export interface KKGetEmployeeForReceiptRes {
  RespCode?: number;
  RespText?: string;
  EmployeeLst?: Record<string, any>[];
}

export interface KKGetFrequencyProductReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface KKGetFrequencyProductRes {
  RespCode?: number;
  RespText?: string;
  FrequencyProductLst?: Record<string, any>[];
}

export interface KKGetHandingOverByIDReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface KKGetHandingOverByIDRes {
  RespCode?: number;
  RespText?: string;
  HandingOverInfo?: any;
}

export interface KKGetHandingOverByReceiptReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface KKGetHandingOverByReceiptRes {
  RespCode?: number;
  RespText?: string;
  HandingOverLst?: Record<string, any>[];
}

export interface KKGetHandingOverLstReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface KKGetHandingOverLstRes {
  RespCode?: number;
  RespText?: string;
  HandingOverLst?: Record<string, any>[];
}

export interface KKGetInventoryInfoReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  DocumentID?: string;
}

export interface KKGetInventoryInfoRes {
  RespCode?: number;
  RespText?: string;
  InventoryHeaderInfo?: any;
}

export interface KKGetInventoryLotLstByPIDReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
  ProductID?: string;
}

export interface KKGetInventoryLotLstByPIDRes {
  RespCode?: number;
  RespText?: string;
  InventoryLotLst?: Record<string, any>[];
}

export interface KKGetInventoryLstByPIDReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  ProductID?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface KKGetInventoryLstByPIDRes {
  RespCode?: number;
  RespText?: string;
  InventoryLineLst?: Record<string, any>[];
}

export interface KKGetInventoryLstByTimeReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface KKGetInventoryLstByTimeRes {
  RespCode?: number;
  RespText?: string;
  InventoryHeaderLst?: Record<string, any>[];
}

export interface KKGetProductErrorReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface KKGetProductErrorRes {
  RespCode?: number;
  RespText?: string;
  InventoryLotLst?: Record<string, any>[];
}

export interface KKGetProductToCheckReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
}

export interface KKGetProductToCheckRes {
  RespCode?: number;
  RespText?: string;
  InventoryLineLst?: Record<string, any>[];
  QuantitySumInMonth?: number;
  QuantityCheckedInMonth?: number;
  QuantityCheckInMonth?: number;
  QuantitySum?: number;
  QuantityChecked?: number;
  QuantityCheck?: number;
}

export interface KKGetReceiptHeaderByIDReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface KKGetReceiptHeaderByIDRes {
  RespCode?: number;
  RespText?: string;
  ReceiptHeaderInfo?: any;
}

export interface KKGetReceiptHeaderLstReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  DocDel?: number;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface KKGetReceiptHeaderLstRes {
  RespCode?: number;
  RespText?: string;
  ReceiptHeaderLst?: Record<string, any>[];
}

export interface KKHandingOverInfo {
  RowID?: number;
  DocumentID?: string;
  ShopCode?: string;
  TimeStart?: string;
  TimeEnd?: string;
  DocInventoryHLst?: string;
  DocSalesHLst?: string;
  EmployeeIDLst?: string;
  EmployeeNameLst?: string;
  TotalAmountCash?: number;
  TotalAmountCard?: number;
  TotalAmountCK?: number;
  TotalAmountReality?: number;
  TotalAmountVNPay?: number;
  TotalAmountVNPayCard?: number;
  TotalAmountMOMO?: number;
  CreateNote?: string;
  CreateID?: number;
  CreateName?: string;
  PromotionStampLst?: string;
  PromotionReturnLst?: string;
  CleanDescription?: string;
  Status?: number;
  TimeCreate?: string;
  ApproveID?: number;
  ApproveName?: string;
  TimeApprove?: string;
  ApproveNote?: string;
  ReciverID?: number;
  ReciverName?: string;
}

export interface KKHandleProductErrorReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  DocumentID?: string;
  LotCodeIndex?: string;
  TypeError?: string;
  Handle?: string;
}

export interface KKHandleProductErrorRes {
  RespCode?: number;
  RespText?: string;
}

export interface KKInventoryHeaderInfo {
  RowID?: number;
  DocumentID?: string;
  ShopCode?: string;
  ShopName?: string;
  CreaterID?: number;
  CreaterName?: string;
  TimeCreate?: string;
  ApproveID?: number;
  ApproveName?: string;
  TimeApporve?: string;
  ApproveNote?: string;
  Description?: string;
  Status?: number;
  QuantityProduct?: number;
  TypeDoc?: number;
  InventoryLineLst?: Record<string, any>[];
  InventoryLotLst?: Record<string, any>[];
}

export interface KKReceiptHeaderInfo {
  RowID?: number;
  DocumentID?: string;
  ShopCode?: string;
  ShopName?: string;
  CreateID?: number;
  CreateName?: string;
  TimeCreate?: string;
  DocHandingOverLst?: string;
  TotalAmountCash?: number;
  TotalAmountCard?: number;
  TotalAmountCK?: number;
  TotalAmountVNPay?: number;
  TotalAmountVNPayCard?: number;
  TotalAmountReality?: number;
  TotalAmountMOMO?: number;
  CreateNote?: string;
  ReceiverID?: number;
  ReceiverName?: string;
  ApproveID?: number;
  ApproveName?: string;
  TimeApprove?: string;
  ApproveCardID?: number;
  ApproveCardName?: string;
  TimeApproveCard?: string;
  ApproveMOMOID?: number;
  ApproveMOMOName?: string;
  TimeApproveMOMO?: string;
  ApproveCKID?: number;
  ApproveCKName?: string;
  TimeApproveCK?: string;
  BankNote?: string;
  BankAmount?: number;
  ApproveVNPayID?: number;
  ApproveVNPayName?: string;
  TimeApproveVNPay?: string;
  ApproveVNPayCardID?: number;
  ApproveVNPayCardName?: string;
  TimeApproveVNPayCard?: string;
  ModifyID?: number;
  ModifyName?: string;
  TimeModify?: string;
  Note?: string;
  Status?: number;
  TimeStart?: string;
  TimeEnd?: string;
  AmountCashMiss?: number;
  AmountCardMiss?: number;
  AmountCKMiss?: number;
  AmountVNPayMiss?: number;
  AmountVNPayCardMiss?: number;
  AmountMOMOMiss?: number;
  DMSID?: string;
  TimeFAST?: string;
  ConnectID?: number;
}

export interface KKUpdateHandingOverReq {
  uPharmaID?: number;
  Token?: string;
  HandingOverInfo?: any;
}

export interface KKUpdateHandingOverRes {
  RespCode?: number;
  RespText?: string;
}

export interface KKUpdateReceiptHeaderReq {
  uPharmaID?: number;
  Token?: string;
  ReceiptHeaderInfo?: any;
}

export interface KKUpdateReceiptHeaderRes {
  RespCode?: number;
  RespText?: string;
}

export interface KTAddProductSpecialReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
}

export interface KTAddProductSpecialRes {
  RespCode?: number;
  RespText?: string;
}

export interface KTAppproveChangeGenuineDocReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
}

export interface KTAppproveChangeGenuineDocRes {
  RespCode?: number;
  RespText?: string;
}

export interface KTChangeGenuineInfo {
  HeaderID?: string;
  ShopCode?: string;
  ShopName?: string;
  TimeCreate?: string;
  CreateID?: number;
  CreateName?: string;
  Status?: number;
  Note?: string;
  TypeStore?: string;
  ModifyID?: number;
  TimeModify?: string;
  ApproveID?: number;
  ApproveName?: string;
  TimeApprove?: string;
  ChangeGenuineLineLst?: Record<string, any>[];
  ChangeGenuineLotLst?: Record<string, any>[];
}

export interface KTChangeLotInfo {
  ProductID?: string;
  ProductName?: string;
  LotCode?: string;
  LotCodeNew?: string;
  TimeCreate?: string;
  CreateID?: number;
  CreateName?: string;
  TimeModify?: string;
  ModifyID?: number;
  ModifyName?: string;
}

export interface KTCreateChangeGenuineDocReq {
  uPharmaID?: number;
  Token?: string;
  ChangeGenuineInfo?: any;
}

export interface KTCreateChangeGenuineDocRes {
  RespCode?: number;
  RespText?: string;
}

export interface KTDelChangeGenuineDocReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
}

export interface KTDelChangeGenuineDocRes {
  RespCode?: number;
  RespText?: string;
}

export interface KTDelChangeLotReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
  LotCode?: string;
}

export interface KTDelChangeLotRes {
  RespCode?: number;
  RespText?: string;
}

export interface KTDelProductSpecialReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
}

export interface KTDelProductSpecialRes {
  RespCode?: number;
  RespText?: string;
}

export interface KTGetChangeGenuineDocByIDReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
}

export interface KTGetChangeGenuineDocByIDRes {
  RespCode?: number;
  RespText?: string;
  ChangeGenuineInfo?: any;
}

export interface KTGetChangeGenuineLstReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface KTGetChangeGenuineLstRes {
  RespCode?: number;
  RespText?: string;
  ChangeGenuineLst?: Record<string, any>[];
}

export interface KTGetChangeLotLstReq {
  uPharmaID?: number;
  Token?: string;
}

export interface KTGetChangeLotLstRes {
  RespCode?: number;
  RespText?: string;
  ChangeLotLst?: Record<string, any>[];
}

export interface KTGetLotForChangeGenuineReq {
  uPharmaID?: number;
  Token?: string;
  StoreCode?: string;
  ProductID?: string;
  LotCode?: string;
  Genuine?: number;
}

export interface KTGetLotForChangeGenuineRes {
  RespCode?: number;
  RespText?: string;
  ChangeGenuineLotLst?: Record<string, any>[];
}

export interface KTGetProductSpecialLstReq {
  uPharmaID?: number;
  Token?: string;
}

export interface KTGetProductSpecialLstRes {
  RespCode?: number;
  RespText?: string;
  ProductSpecialLst?: Record<string, any>[];
}

export interface KTUpdateChangeGenuineDocReq {
  uPharmaID?: number;
  Token?: string;
  ChangeGenuineInfo?: any;
}

export interface KTUpdateChangeGenuineDocRes {
  RespCode?: number;
  RespText?: string;
}

export interface KTUpdateChangeLotReq {
  uPharmaID?: number;
  Token?: string;
  ChangeLotInfo?: any;
}

export interface KTUpdateChangeLotRes {
  RespCode?: number;
  RespText?: string;
}

export interface LGTBoxInfo {
  BoxID?: number;
  CreateID?: number;
  CreateName?: string;
  TimeCreate?: string;
  ModifyID?: number;
  ModifyName?: string;
  TimeModify?: string;
  TypeDoc?: string;
  ReceiverCode?: string;
  ReceiverName?: string;
  SenderCode?: string;
  SenderName?: string;
  QuantityBox?: number;
  QuantityBoxOdd?: number;
  ShipToAddress?: string;
  Contact?: string;
  PartnerID?: string;
  PartnerName?: string;
  FeeShip?: number;
  Status?: number;
  TimeImport?: string;
  UserImportID?: number;
  UserImportName?: string;
  CodeVD?: string;
  ShipPartnerLst?: Record<string, any>[];
}

export interface LGTComfirmBoxReq {
  uPharmaID?: number;
  Token?: string;
  BoxID?: string;
  QuantityBox?: number;
  QuantityBoxOdd?: number;
}

export interface LGTComfirmBoxRes {
  RespCode?: number;
  RespText?: string;
}

export interface LGTCreateBoxReq {
  uPharmaID?: number;
  Token?: string;
  BoxInfo?: any;
  TransferDocLst?: Record<string, any>[];
}

export interface LGTCreateBoxRes {
  RespCode?: number;
  RespText?: string;
}

export interface LGTCreateShipPartnerReq {
  uPharmaID?: number;
  Token?: string;
  ShipPartnerInfo?: any;
}

export interface LGTCreateShipPartnerRes {
  RespCode?: number;
  RespText?: string;
}

export interface LGTDelBoxReq {
  uPharmaID?: number;
  Token?: string;
  BoxID?: number;
}

export interface LGTDelBoxRes {
  RespCode?: number;
  RespText?: string;
}

export interface LGTDelShipPartnerReq {
  uPharmaID?: number;
  Token?: string;
  PartnerID?: string;
}

export interface LGTDelShipPartnerRes {
  RespCode?: number;
  RespText?: string;
}

export interface LGTGetBoxByIDReq {
  uPharmaID?: number;
  Token?: string;
  BoxID?: number;
}

export interface LGTGetBoxByIDRes {
  RespCode?: number;
  RespText?: string;
  BoxInfo?: any;
  TransferDocLst?: Record<string, any>[];
}

export interface LGTGetBoxByTimeReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface LGTGetBoxByTimeRes {
  RespCode?: number;
  RespText?: string;
  BoxLst?: Record<string, any>[];
}

export interface LGTGetPartnerShopLstReq {
  uPharmaID?: number;
  Token?: string;
  PartnerID?: string;
}

export interface LGTGetPartnerShopLstRes {
  RespCode?: number;
  RespText?: string;
  PartnerShopLst?: Record<string, any>[];
}

export interface LGTGetShipPartnerLstReq {
  uPharmaID?: number;
  Token?: string;
  City?: string;
  BoxID?: string;
}

export interface LGTGetShipPartnerLstRes {
  RespCode?: number;
  RespText?: string;
  ShipPartnerLst?: Record<string, any>[];
}

export interface LGTGetTransferDocLstReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface LGTGetTransferDocLstRes {
  RespCode?: number;
  RespText?: string;
  TransferDocLst?: Record<string, any>[];
}

export interface LGTShipPartnerInfo {
  PartnerID?: string;
  PartnerName?: string;
  PartnerContact?: string;
  City?: string;
  FeeShip?: number;
  Note?: string;
  TimeCreate?: string;
  CreateName?: string;
  CustomerCode?: string;
  CustomerName?: string;
}

export interface LGTUpdateBoxReq {
  uPharmaID?: number;
  Token?: string;
  BoxInfo?: any;
  TransferDocLst?: Record<string, any>[];
}

export interface LGTUpdateBoxRes {
  RespCode?: number;
  RespText?: string;
}

export interface LGTUpdatePartnerShopReq {
  uPharmaID?: number;
  Token?: string;
  PartnerID?: string;
  PartnerShopLst?: Record<string, any>[];
}

export interface LGTUpdatePartnerShopRes {
  RespCode?: number;
  RespText?: string;
}

export interface LGTUpdateShipPartnerReq {
  uPharmaID?: number;
  Token?: string;
  ShipPartnerInfo?: any;
}

export interface LGTUpdateShipPartnerRes {
  RespCode?: number;
  RespText?: string;
}

export interface MHAddOrderLockReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
  TypeDoc?: number;
}

export interface MHAddOrderLockRes {
  RespCode?: number;
  RespText?: string;
}

export interface MHApproveImportSystemReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
  Status?: number;
}

export interface MHApproveImportSystemRes {
  RespCode?: number;
  RespText?: string;
}

export interface MHApproveOrderHeaderReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
  Note?: string;
  Status?: number;
}

export interface MHApproveOrderHeaderRes {
  RespCode?: number;
  RespText?: string;
}

export interface MHApproveOrderLineReq {
  uPharmaID?: number;
  Token?: string;
  RowID?: number;
  Status?: number;
}

export interface MHApproveOrderLineRes {
  RespCode?: number;
  RespText?: string;
}

export interface MHApprovePaymentHeaderReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
  Status?: number;
  Note?: string;
}

export interface MHApprovePaymentHeaderRes {
  RespCode?: number;
  RespText?: string;
}

export interface MHApproveSuggestLstReq {
  uPharmaID?: number;
  Token?: string;
  RowIDLst?: string;
  RowID?: number;
  Quantity?: number;
  QuantityPromo?: number;
  PromoID?: number;
  Note?: string;
}

export interface MHApproveSuggestLstRes {
  RespCode?: number;
  RespText?: string;
}

export interface MHCreateImportSystemReq {
  uPharmaID?: number;
  Token?: string;
  LineIDLst?: string;
  ImportSysHeaderInfo?: any;
}

export interface MHCreateImportSystemRes {
  RespCode?: number;
  RespText?: string;
}

export interface MHCreateOrderHeaderReq {
  uPharmaID?: number;
  Token?: string;
  OrderHeaderInfo?: any;
}

export interface MHCreateOrderHeaderRes {
  RespCode?: number;
  RespText?: string;
}

export interface MHCreatePaymentHeaderReq {
  uPharmaID?: number;
  Token?: string;
  PaymentHeaderInfo?: any;
}

export interface MHCreatePaymentHeaderRes {
  RespCode?: number;
  RespText?: string;
}

export interface MHCreateSuggestLstReq {
  uPharmaID?: number;
  Token?: string;
  OrderSuggestLst?: Record<string, any>[];
}

export interface MHCreateSuggestLstRes {
  RespCode?: number;
  RespText?: string;
}

export interface MHDelImportSystemReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface MHDelImportSystemRes {
  RespCode?: number;
  RespText?: string;
}

export interface MHDelOrderHeaderReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface MHDelOrderHeaderRes {
  RespCode?: number;
  RespText?: string;
}

export interface MHDelOrderLockReq {
  uPharmaID?: number;
  Token?: string;
  RowID?: number;
}

export interface MHDelOrderLockRes {
  RespCode?: number;
  RespText?: string;
}

export interface MHDelPaymentHeaderReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface MHDelPaymentHeaderRes {
  RespCode?: number;
  RespText?: string;
}

export interface MHDelProductOffReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
  TypeDoc?: number;
}

export interface MHDelProductOffRes {
  RespCode?: number;
  RespText?: string;
}

export interface MHDelSuggestLstReq {
  uPharmaID?: number;
  Token?: string;
  RowIDLst?: string;
}

export interface MHDelSuggestLstRes {
  RespCode?: number;
  RespText?: string;
}

export interface MHGetDebtByTimeReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface MHGetDebtByTimeRes {
  RespCode?: number;
  RespText?: string;
  DebtLst?: Record<string, any>[];
}

export interface MHGetFileImportSysReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface MHGetFileImportSysRes {
  RespCode?: number;
  RespText?: string;
  FileImportSysLst?: Record<string, any>[];
}

export interface MHGetImportSysDetailReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface MHGetImportSysDetailRes {
  RespCode?: number;
  RespText?: string;
  ImportSysDetailLst?: Record<string, any>[];
}

export interface MHGetImportSystemByIDReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface MHGetImportSystemByIDRes {
  RespCode?: number;
  RespText?: string;
  ImportSysHeaderInfo?: any;
}

export interface MHGetImportSystemLstReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface MHGetImportSystemLstRes {
  RespCode?: number;
  RespText?: string;
  ImportSysHeaderLst?: Record<string, any>[];
}

export interface MHGetOrderHeaderByIDReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface MHGetOrderHeaderByIDRes {
  RespCode?: number;
  RespText?: string;
  OrderHeaderInfo?: any;
}

export interface MHGetOrderHeaderByTimeReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface MHGetOrderHeaderByTimeRes {
  RespCode?: number;
  RespText?: string;
  OrderHeaderLst?: Record<string, any>[];
}

export interface MHGetOrderLockLstReq {
  uPharmaID?: number;
  Token?: string;
}

export interface MHGetOrderLockLstRes {
  RespCode?: number;
  RespText?: string;
  OrderLockLst?: Record<string, any>[];
}

export interface MHGetOrderSuggestLstReq {
  uPharmaID?: number;
  Token?: string;
}

export interface MHGetOrderSuggestLstRes {
  RespCode?: number;
  RespText?: string;
  OrderSuggestLst?: Record<string, any>[];
}

export interface MHGetPaymentHeaderByIDReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface MHGetPaymentHeaderByIDRes {
  RespCode?: number;
  RespText?: string;
  PaymentHeaderInfo?: any;
}

export interface MHGetPaymentHeaderLstReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface MHGetPaymentHeaderLstRes {
  RespCode?: number;
  RespText?: string;
  PaymentHeaderLst?: Record<string, any>[];
}

export interface MHGetProductOffReq {
  uPharmaID?: number;
  Token?: string;
  TypeDoc?: number;
}

export interface MHGetProductOffRes {
  RespCode?: number;
  RespText?: string;
  ProductOffLst?: Record<string, any>[];
}

export interface MHGetProductOffShopReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
}

export interface MHGetProductOffShopRes {
  RespCode?: number;
  RespText?: string;
  ProductOffShopLst?: Record<string, any>[];
}

export interface MHGetReportImportSystemReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface MHGetReportImportSystemRes {
  RespCode?: number;
  RespText?: string;
  ReportOrderLst?: Record<string, any>[];
}

export interface MHGetReportOrderByTimeReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface MHGetReportOrderByTimeRes {
  RespCode?: number;
  RespText?: string;
  ReportOrderLst?: Record<string, any>[];
}

export interface MHGetSuggestLstReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface MHGetSuggestLstRes {
  RespCode?: number;
  RespText?: string;
  OrderSuggestLst?: Record<string, any>[];
}

export interface MHGetSuggestPlanToBuyLstReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
}

export interface MHGetSuggestPlanToBuyLstRes {
  RespCode?: number;
  RespText?: string;
  SuggestPlanToBuyLst?: Record<string, any>[];
}

export interface MHImportSysHeaderInfo {
  ReferenceCode?: string;
  ReferenceFast?: string;
  DocumentID?: string;
  CreateID?: number;
  CreateCode?: string;
  CreateName?: string;
  TimeCreate?: string;
  ApproverID?: number;
  ApproverCode?: string;
  ApproverName?: string;
  CreateNote?: string;
  TimeModify?: string;
  ModifyId?: number;
  ModifyCode?: string;
  ModifyName?: string;
  ApproveNote?: string;
  TimeApprove?: string;
  CustomerID?: number;
  CustomerCode?: string;
  CustomerName?: string;
  CustomerAddress?: string;
  CustomerContact?: string;
  PostingDate?: string;
  Description?: string;
  PaymentMethod?: string;
  TotalAmount?: number;
  TotalAmountVAT?: number;
  TotalAmountReal?: number;
  DiscountMoney?: number;
  DiscountType?: number;
  Status?: number;
  Center?: string;
  AccStoreID?: number;
  EmStoreName?: string;
  TimeStore?: string;
  AccPayID?: number;
  EmPayName?: string;
  TimePayed?: string;
  LocationType?: number;
  ShopCode?: string;
  ShopName?: string;
  IsFile?: boolean;
  BuyerName?: string;
  ImportSysLineLst?: Record<string, any>[];
}

export interface MHOrderHeaderInfo {
  RowID?: number;
  DocumentID?: string;
  CustomerCode?: string;
  CustomerName?: string;
  CustomerAddress?: string;
  CustomerCode2?: string;
  CustomerName2?: string;
  CustomerAddress2?: string;
  ShipToAddress?: string;
  Contact?: string;
  TimeCreate?: string;
  TimeApprove?: string;
  CreateID?: number;
  CreateName?: string;
  CreateNote?: string;
  ApproveID?: number;
  ApproveName?: string;
  ApproveNote?: string;
  Status?: number;
  PaymentMethod?: string;
  Center?: string;
  ReferentCode?: string;
  PaymentInfo?: string;
  Amount?: number;
  LocationType?: number;
  ShopCode?: string;
  ShopName?: string;
  OrderLineLst?: Record<string, any>[];
  OrderSuggestLst?: Record<string, any>[];
}

export interface MHPaymentHeaderInfo {
  RowID?: number;
  DocumentID?: string;
  TimeCreate?: string;
  CreateID?: number;
  CreateName?: string;
  CustomerID?: string;
  CustomerName?: string;
  Note?: string;
  Amount?: number;
  AmountAdjust?: number;
  Status?: number;
  TimeModify?: string;
  ModifyID?: number;
  ModifyName?: string;
  PaymentMethod?: string;
  BankAccount?: string;
  BankName?: string;
  BankAccountName?: string;
  TimeApprove?: string;
  ApproveID?: number;
  ApproveName?: string;
  ApproveNote?: string;
  TimeApprove2?: string;
  ApproveID2?: number;
  ApproveName2?: string;
  PayID?: number;
  TimePay?: string;
  PayName?: string;
  Center?: string;
  PostingDate?: string;
  ReferentCode?: string;
  Deadline?: number;
  DMSID?: string;
  TimeConnect?: string;
  ConnectID?: string;
  PaymentLineLst?: Record<string, any>[];
}

export interface MHSplitInvoiceOrderReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
  OrderLineLst?: Record<string, any>[];
}

export interface MHSplitInvoiceOrderRes {
  RespCode?: number;
  RespText?: string;
}

export interface MHUpProductOffReq {
  uPharmaID?: number;
  Token?: string;
  ProductOffLst?: Record<string, any>[];
}

export interface MHUpProductOffRes {
  RespCode?: number;
  RespText?: string;
}

export interface MHUpdateImportSystemReq {
  uPharmaID?: number;
  Token?: string;
  ImportSysHeaderInfo?: any;
}

export interface MHUpdateImportSystemRes {
  RespCode?: number;
  RespText?: string;
}

export interface MHUpdateOrderHeaderReq {
  uPharmaID?: number;
  Token?: string;
  OrderHeaderInfo?: any;
}

export interface MHUpdateOrderHeaderRes {
  RespCode?: number;
  RespText?: string;
}

export interface MHUpdatePaymentHeaderReq {
  uPharmaID?: number;
  Token?: string;
  PaymentHeaderInfo?: any;
}

export interface MHUpdatePaymentHeaderRes {
  RespCode?: number;
  RespText?: string;
}

export interface MHUpdateProductOffShopReq {
  uPharmaID?: number;
  Token?: string;
  ProductOffShopLst?: Record<string, any>[];
}

export interface MHUpdateProductOffShopRes {
  RespCode?: number;
  RespText?: string;
}

export interface MMCreateIPNReq {
  orderType?: string;
  amount?: number;
  partnerCode?: string;
  orderId?: string;
  extraData?: string;
  signature?: string;
  transId?: string;
  responseTime?: number;
  resultCode?: number;
  message?: string;
  payType?: string;
  requestId?: string;
  orderInfo?: string;
}

export interface MMCreateIPNRes {
  resultCode?: number;
  message?: string;
}

export interface MMCreatePaymentCardReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  Amount?: number;
  RedirectUrl?: string;
  SocketID?: string;
  InstrumentType?: string;
}

export interface MMCreatePaymentCardRes {
  RespCode?: number;
  RespText?: string;
  PayUrl?: string;
  Sign?: string;
  CheckSum?: string;
}

export interface MMCreatePaymentQRReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  Amount?: number;
  RedirectUrl?: string;
  QRSocket?: string;
}

export interface MMCreatePaymentQRRes {
  RespCode?: number;
  RespText?: string;
  PayUrl?: string;
  Sign?: string;
  CheckSum?: string;
}

export interface MOMOGetQRPaymentLstReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
  ShopCode?: string;
}

export interface MOMOGetQRPaymentLstRes {
  RespCode?: number;
  RespText?: string;
  PaymentLst?: Record<string, any>[];
}

export interface NTActivateCustomerCardReq {
  uPharmaID?: number;
  Token?: string;
  CardID?: string;
  CustomerPhone?: string;
}

export interface NTActivateCustomerCardRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTAddCustomerCardReq {
  uPharmaID?: number;
  Token?: string;
  CardID?: string;
}

export interface NTAddCustomerCardRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTAddDefaultValueReq {
  uPharmaID?: number;
  Token?: string;
  DefaultValueInfo?: any;
}

export interface NTAddDefaultValueRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTAddEmployeeInfoReq {
  uPharmaID?: number;
  Token?: string;
  EmployeeInfo?: any;
}

export interface NTAddEmployeeInfoRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTAddNewProductReq {
  uPharmaID?: number;
  Token?: string;
  ProductInfo?: any;
}

export interface NTAddNewProductRes {
  RespCode?: number;
  RespText?: string;
  ProductID?: string;
}

export interface NTAddOrderProductNewLineReq {
  uPharmaID?: number;
  Token?: string;
  OrderProductNewLineInfo?: any;
}

export interface NTAddOrderProductNewLineRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTAddOrganizationReq {
  uPharmaID?: number;
  Token?: string;
  OrganizationInfo?: any;
}

export interface NTAddOrganizationRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTAddOrganizationTempReq {
  uPharmaID?: number;
  Token?: string;
  OrganizationTempInfo?: any;
}

export interface NTAddOrganizationTempRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTAddPolicyVoucherLstReq {
  uPharmaID?: number;
  Token?: string;
  PolicyVoucherLst?: Record<string, any>[];
}

export interface NTAddPolicyVoucherLstRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTAddPolicyVoucherReq {
  uPharmaID?: number;
  Token?: string;
  PolicyVoucherInfo?: any;
}

export interface NTAddPolicyVoucherRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTAddProductClassReq {
  uPharmaID?: number;
  Token?: string;
  ClassID?: string;
  ClassName?: string;
}

export interface NTAddProductClassRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTAddProductShelfReq {
  uPharmaID?: number;
  Token?: string;
  Center?: string;
  Level2Code?: string;
  LotCodeIndex?: string;
}

export interface NTAddProductShelfRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTAddProductSupplierReq {
  uPharmaID?: number;
  Token?: string;
  CustomerID?: number;
  ProductIDLst?: string;
  StoreLst?: string;
  CustomerID2?: number;
}

export interface NTAddProductSupplierRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTAddSalesmanByShopReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  PhoneNumber?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTAddSalesmanByShopRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTAddSupplierCommitReq {
  uPharmaID?: number;
  Token?: string;
  CustomerID?: number;
  TimeStart?: string;
  TimeEnd?: string;
  Amount?: number;
}

export interface NTAddSupplierCommitRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTAddSupplierWorkReq {
  uPharmaID?: number;
  Token?: string;
  CustomerID?: number;
  TimeEnd?: string;
  WorkName?: string;
  WorkDes?: string;
}

export interface NTAddSupplierWorkRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTAddUserProductGroupReq {
  uPharmaID?: number;
  Token?: string;
  uPharmaIDEm?: number;
  UserProductGroupLst?: Record<string, any>[];
}

export interface NTAddUserProductGroupRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTAddUserSupplierReq {
  uPharmaID?: number;
  Token?: string;
  SupplierFollowerLst?: Record<string, any>[];
}

export interface NTAddUserSupplierRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTApproveCDocChangePriceReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
}

export interface NTApproveCDocChangePriceRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTApproveCancelProductReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
  Status?: number;
  Note?: string;
}

export interface NTApproveCancelProductRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTApproveDocChangePriceReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
}

export interface NTApproveDocChangePriceRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTApproveEmployeePlanReq {
  uPharmaID?: number;
  Token?: string;
  RowID?: number;
  Status?: number;
}

export interface NTApproveEmployeePlanRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTApproveImportLineReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
  RowIDLst?: string;
}

export interface NTApproveImportLineRes {
  RespCode?: number;
  RespText?: string;
  StatusHeader?: number;
}

export interface NTApproveImportStoreReq {
  uPharmaID?: number;
  Token?: string;
  HeaderId?: string;
  Status?: number;
  Note?: string;
}

export interface NTApproveImportStoreRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTApproveImportSuppReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
  Note?: string;
  RowIDLst?: string;
}

export interface NTApproveImportSuppRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTApproveImportSysReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
  Note?: string;
  RowIDLst?: string;
}

export interface NTApproveImportSysRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTApproveOrderProductNewReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: number;
  TypeApprove?: number;
  Status?: number;
  ApproveNote?: string;
  FollowID?: number;
  TimeExpected?: string;
}

export interface NTApproveOrderProductNewRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTApproveOverTimeReq {
  uPharmaID?: number;
  Token?: string;
  RowID?: number;
  Status?: number;
  TimeStart?: string;
  TimeEnd?: string;
  Mission?: string;
  Note?: string;
}

export interface NTApproveOverTimeRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTApproveReturnDocLineReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
  RowIDLst?: string;
}

export interface NTApproveReturnDocLineRes {
  RespCode?: number;
  RespText?: string;
  StatusHeader?: number;
}

export interface NTApproveReturnShopReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface NTApproveReturnShopRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTApproveShiftWorkReq {
  uPharmaID?: number;
  Token?: string;
  Date?: string;
  RowID?: number;
  ShopCode?: string;
  TypeApprove?: string;
  DelApprove?: number;
  EmployeeID?: number;
}

export interface NTApproveShiftWorkRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTApproveTransferOrderFirstReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
}

export interface NTApproveTransferOrderFirstRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTApproveTransferOrderHeaderReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
  Status?: number;
  Note?: string;
}

export interface NTApproveTransferOrderHeaderRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTApproveTransferSuppLineReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
  RowIDLst?: string;
}

export interface NTApproveTransferSuppLineRes {
  RespCode?: number;
  RespText?: string;
  StatusHeader?: number;
}

export interface NTApproveTransferSuppReq {
  uPharmaID?: number;
  Token?: string;
  HeaderId?: string;
}

export interface NTApproveTransferSuppRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTBuyerInfo {
  RowID?: number;
  BuyerName?: string;
  PhoneNumber?: string;
  Email?: string;
  YearOfBirth?: number;
  Sex?: string;
  Birthday?: string;
  Weight?: number;
  Address?: string;
  BankName?: string;
  BankAccount?: string;
  EValletName?: string;
  EValletAccount?: string;
  ShopName?: string;
  Pathological?: string;
  Diagnose?: string;
  CardInfo?: string;
  AmountRank?: number;
  AmountAVGRank?: number;
  InvoiceRank?: number;
  AmountTarget?: number;
  AmountAVGTarget?: number;
  InvoiceTarget?: number;
  QuantityInvoice?: number;
  AmountIncludingVAT?: number;
  CreaterID?: number;
  TimeCreate?: string;
  ModifyID?: number;
  TimeModify?: string;
  LevelVip?: number;
  Status?: number;
  Point?: number;
}

export interface NTCancelProductInfo {
  DocumentID?: string;
  CreateID?: number;
  TimeCreate?: string;
  CreateName?: string;
  Status?: number;
  ShopCode?: string;
  ShopName?: string;
  Note?: string;
  TypeDoc?: number;
  TimeApprove?: string;
  ApproveName?: string;
  ApproveID?: number;
  NoteKT?: string;
  TimeStore?: string;
  AccStoreName?: string;
  AccStoreID?: number;
  NoteStore?: string;
  QuantityProduct?: number;
  TimeApproveMH?: string;
  ApproveNameMH?: string;
  ApproveIDMH?: number;
  NoteMH?: string;
  TimeApproveKT2?: string;
  ApproveNameKT2?: string;
  ApproveIDKT2?: number;
  NoteKT2?: string;
  LotCodeCancelLst?: Record<string, any>[];
}

export interface NTChangePasswordReq {
  UserName?: string;
  OldPassword?: string;
  NewPassword?: string;
}

export interface NTChangePasswordRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTCheckNewEmployeeReq {
  uPharmaID?: number;
  Token?: string;
  UserCode?: string;
}

export interface NTCheckNewEmployeeRes {
  RespCode?: number;
  RespText?: string;
  EmployeeInfo?: any;
}

export interface NTCheckOTPLostPasswordReq {
  UserName?: string;
  OTPCode?: string;
}

export interface NTCheckOTPLostPasswordRes {
  RespCode?: number;
  RespText?: string;
  Notify?: string;
}

export interface NTCheckProductPrintReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
  LotCode?: string;
}

export interface NTCheckProductPrintRes {
  RespCode?: number;
  RespText?: string;
  Print?: boolean;
}

export interface NTCheckPromoOrderReq {
  uPharmaID?: number;
  Token?: string;
  OrderHeaderInfo?: any;
}

export interface NTCheckPromoOrderRes {
  RespCode?: number;
  RespText?: string;
  PromoHeaderLst?: Record<string, any>[];
}

export interface NTCheckStampForReturnDocReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  LotCodeIndex?: string;
}

export interface NTCheckStampForReturnDocRes {
  RespCode?: number;
  RespText?: string;
  ReturnStoreLineInfo?: any;
  ReturnStoreLotInfo?: any;
}

export interface NTCheckStampImportSysReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
  LotCodeIndex?: string;
  LineID?: number;
  Quantity?: number;
}

export interface NTCheckStampImportSysRes {
  RespCode?: number;
  RespText?: string;
  StatusLine?: number;
  StatusHeader?: number;
}

export interface NTCompleteSupplierWorkReq {
  uPharmaID?: number;
  Token?: string;
  RowID?: number;
}

export interface NTCompleteSupplierWorkRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTConfirmDebtOrderHeaderByIDReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
}

export interface NTConfirmDebtOrderHeaderByIDRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTConfirmMessageReq {
  uPharmaID?: number;
  Token?: string;
  MessageID?: number;
}

export interface NTConfirmMessageRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTConfirmOrderHeaderByIDReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
  Note?: string;
}

export interface NTConfirmOrderHeaderByIDRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTConnectLotCodeIndexCReq {
  uPharmaID?: number;
  Token?: string;
  LotCodeIndex?: string;
  LotCodeIndexC?: string;
}

export interface NTConnectLotCodeIndexCRes {
  RespCode?: number;
  RespText?: string;
  LotCodeIndexCInfo?: any;
}

export interface NTCreateCDocChangePriceReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
  TypeDoc?: number;
  PackageOld?: number;
  PackageNew?: number;
}

export interface NTCreateCDocChangePriceRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTCreateCancelProductReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  CancelProductInfo?: any;
}

export interface NTCreateCancelProductRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTCreateDocChangePackageIDReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  Note?: string;
  TypeChange?: number;
  LotCodeChangeLst?: Record<string, any>[];
}

export interface NTCreateDocChangePackageIDRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTCreateDocChangePriceReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  Note?: string;
  TypeChange?: number;
  LotCodeChangeLst?: Record<string, any>[];
}

export interface NTCreateDocChangePriceRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTCreateImportStoreReq {
  uPharmaID?: number;
  Token?: string;
  RowIDLst?: string;
  ImportStoreHeaderInfo?: any;
  ImportLotLineLst?: Record<string, any>[];
}

export interface NTCreateImportStoreRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTCreateImportSuppReq {
  uPharmaID?: number;
  Token?: string;
  ImportSuppHeaderInfo?: any;
}

export interface NTCreateImportSuppRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTCreateImportSysReq {
  uPharmaID?: number;
  Token?: string;
  DocumentPNKID?: string;
  ImportSysHeaderInfo?: any;
}

export interface NTCreateImportSysRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTCreateLevel1ShelfReq {
  uPharmaID?: number;
  Token?: string;
  Center?: string;
  TypeShelf?: number;
  QuantityLevel1?: number;
  QuantityLevel2?: number;
}

export interface NTCreateLevel1ShelfRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTCreateLevel2ShelfReq {
  uPharmaID?: number;
  Token?: string;
  Center?: string;
  Level1Code?: string;
  QuantityLevel2?: number;
}

export interface NTCreateLevel2ShelfRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTCreateMessageReq {
  uPharmaID?: number;
  Token?: string;
  MessageInfo?: any;
}

export interface NTCreateMessageRes {
  RespCode?: number;
  RespText?: string;
  MessageLst?: Record<string, any>[];
}

export interface NTCreateOrderHeaderReq {
  uPharmaID?: number;
  Token?: string;
  VoucherGift?: string;
  VoucherUse?: string;
  VoucherPoint?: number;
  OrderHeaderInfo?: any;
  PromoAchieveLst?: Record<string, any>[];
}

export interface NTCreateOrderHeaderRes {
  RespCode?: number;
  RespText?: string;
  HeaderID?: string;
  EmplyeeCode?: string;
  EmplyeeName?: string;
  QRCode?: string;
  Hotline?: string;
  IsReward?: number;
  OrderHeaderInfo?: any;
}

export interface NTCreateOrderProductNewReq {
  uPharmaID?: number;
  Token?: string;
  OrderProductNewInfo?: any;
}

export interface NTCreateOrderProductNewRes {
  RespCode?: number;
  RespText?: string;
  DcoumentID?: number;
}

export interface NTCreateOverTimeReq {
  uPharmaID?: number;
  Token?: string;
  OverTimeInfo?: any;
}

export interface NTCreateOverTimeRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTCreatePriceOrderReq {
  uPharmaID?: number;
  Token?: string;
  PriceOrderInfo?: any;
}

export interface NTCreatePriceOrderRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTCreatePromoHeaderReq {
  uPharmaID?: number;
  Token?: string;
  PromoHeaderInfo?: any;
}

export interface NTCreatePromoHeaderRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTCreateReturnDocReq {
  uPharmaID?: number;
  Token?: string;
  ReturnStoreInfo?: any;
}

export interface NTCreateReturnDocRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTCreateReturnShopReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  Note?: string;
  ReturnShopLotLst?: Record<string, any>[];
}

export interface NTCreateReturnShopRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTCreateShiftWorkReq {
  uPharmaID?: number;
  Token?: string;
  ShiftWorkLst?: Record<string, any>[];
}

export interface NTCreateShiftWorkRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTCreateSupplierBankAccountReq {
  uPharmaID?: number;
  Token?: string;
  SupplierBankAccountInfo?: any;
}

export interface NTCreateSupplierBankAccountRes {
  RespCode?: number;
  RespText?: string;
  FileID?: number;
}

export interface NTCreateSupplierContactReq {
  uPharmaID?: number;
  Token?: string;
  SupplierContact?: any;
}

export interface NTCreateSupplierContactRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTCreateSupplierPolicyReq {
  uPharmaID?: number;
  Token?: string;
  SupplierPolicyInfo?: any;
}

export interface NTCreateSupplierPolicyRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTCreateSupplierReq {
  uPharmaID?: number;
  Token?: string;
  SupplierInfo?: any;
}

export interface NTCreateSupplierRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTCreateSupplierSurveyReq {
  uPharmaID?: number;
  Token?: string;
  SupplierSurveyInfo?: any;
}

export interface NTCreateSupplierSurveyRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTCreateTransferOrderCenterReq {
  uPharmaID?: number;
  Token?: string;
  StoreDoc?: number;
  TransferOrderHeaderInfo?: any;
}

export interface NTCreateTransferOrderCenterRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTCreateTransferOrderFirstLstReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  ShopLst?: string;
}

export interface NTCreateTransferOrderFirstLstRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTCreateTransferOrderLstReq {
  uPharmaID?: number;
  Token?: string;
  TransferOrderLineLst?: Record<string, any>[];
}

export interface NTCreateTransferOrderLstRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTCreateTransferOrderReq {
  uPharmaID?: number;
  Token?: string;
  StoreDoc?: number;
  TransferOrderHeaderInfo?: any;
}

export interface NTCreateTransferOrderRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTCreateTransferSuppReq {
  uPharmaID?: number;
  Token?: string;
  TransferSuppHeaderInfo?: any;
}

export interface NTCreateTransferSuppRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDefaultValueInfo {
  TableName?: string;
  TableValue?: string;
  TableReference?: string;
  TableReference2?: string;
}

export interface NTDelCDocChangePriceReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
}

export interface NTDelCDocChangePriceRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelCancelProductReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface NTDelCancelProductRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelDocChangePriceReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
}

export interface NTDelDocChangePriceRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelFileShopReq {
  uPharmaID?: number;
  Token?: string;
  FileCode?: string;
}

export interface NTDelFileShopRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelGShopReq {
  uPharmaID?: number;
  Token?: string;
  GShopCode?: number;
}

export interface NTDelGShopRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelImportStoreReq {
  uPharmaID?: number;
  Token?: string;
  HeaderId?: string;
}

export interface NTDelImportStoreRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelImportSuppReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
}

export interface NTDelImportSuppRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelImportSysReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
}

export interface NTDelImportSysRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelInventoryShopSafeReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  ProductID?: string;
}

export interface NTDelInventoryShopSafeRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelInventorySystemSafeReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
  StoreSafe?: string;
}

export interface NTDelInventorySystemSafeRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelLotCodeIndexCReq {
  uPharmaID?: number;
  Token?: string;
  LotCodeIndex?: string;
}

export interface NTDelLotCodeIndexCRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelMessageReq {
  uPharmaID?: number;
  Token?: string;
  MessageID?: number;
}

export interface NTDelMessageRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelOrderHeaderReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
}

export interface NTDelOrderHeaderRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelOrderProductNewLineReq {
  uPharmaID?: number;
  Token?: string;
  RowID?: number;
}

export interface NTDelOrderProductNewLineRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelOrderProductNewReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: number;
}

export interface NTDelOrderProductNewRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelOrganizationTempReq {
  uPharmaID?: number;
  Token?: string;
  RowID?: number;
}

export interface NTDelOrganizationTempRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelOverTimeReq {
  uPharmaID?: number;
  Token?: string;
  RowID?: number;
}

export interface NTDelOverTimeRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelPackageDefaultReq {
  uPharmaID?: number;
  Token?: string;
  RowID?: number;
}

export interface NTDelPackageDefaultRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelPolicyVoucherReq {
  uPharmaID?: number;
  Token?: string;
  VoucherID?: string;
}

export interface NTDelPolicyVoucherRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelPriceSalesReq {
  uPharmaID?: number;
  Token?: string;
  RowID?: number;
}

export interface NTDelPriceSalesRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelProductByIDReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
}

export interface NTDelProductByIDRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelProductClassReq {
  uPharmaID?: number;
  Token?: string;
  ClassID?: string;
  ClassName?: string;
}

export interface NTDelProductClassRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelProductRelationshipReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
  ProductID2?: string;
}

export interface NTDelProductRelationshipRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelProductShelfReq {
  uPharmaID?: number;
  Token?: string;
  RowID?: number;
}

export interface NTDelProductShelfRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelProductSupplierReq {
  uPharmaID?: number;
  Token?: string;
  CustomerID?: number;
  ProductID?: string;
}

export interface NTDelProductSupplierRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelPromoHeaderReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface NTDelPromoHeaderRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelReturnDocReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface NTDelReturnDocRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelReturnShopReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface NTDelReturnShopRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelSalesmanByShopReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: number;
}

export interface NTDelSalesmanByShopRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelShiftWorkReq {
  uPharmaID?: number;
  Token?: string;
  RowID?: number;
}

export interface NTDelShiftWorkRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelSupplierBankAccountReq {
  uPharmaID?: number;
  Token?: string;
  RowID?: number;
}

export interface NTDelSupplierBankAccountRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelSupplierCommitReq {
  uPharmaID?: number;
  Token?: string;
  RowID?: number;
}

export interface NTDelSupplierCommitRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelSupplierContactReq {
  uPharmaID?: number;
  Token?: string;
  RowID?: number;
}

export interface NTDelSupplierContactRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelSupplierFileReq {
  uPharmaID?: number;
  Token?: string;
  CustomerID?: number;
}

export interface NTDelSupplierFileRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelSupplierPolicyReq {
  uPharmaID?: number;
  Token?: string;
  RowID?: number;
}

export interface NTDelSupplierPolicyRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelSupplierProductFileReq {
  uPharmaID?: number;
  Token?: string;
  FileID?: number;
}

export interface NTDelSupplierProductFileRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelSupplierReq {
  uPharmaID?: number;
  Token?: string;
  CustomerID?: number;
}

export interface NTDelSupplierRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelSupplierSurveyReq {
  uPharmaID?: number;
  Token?: string;
  RowID?: number;
}

export interface NTDelSupplierSurveyRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelSupplierWorkReq {
  uPharmaID?: number;
  Token?: string;
  RowID?: number;
}

export interface NTDelSupplierWorkRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelTransferOrderCenterReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
}

export interface NTDelTransferOrderCenterRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelTransferOrderReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
}

export interface NTDelTransferOrderRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelTransferSuppReq {
  uPharmaID?: number;
  Token?: string;
  HeaderId?: string;
}

export interface NTDelTransferSuppRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTDelUserSupplierReq {
  uPharmaID?: number;
  Token?: string;
  RowIDLst?: string;
}

export interface NTDelUserSupplierRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTEmployeeCPC1HNInfo {
  EmployeeCode?: string;
  EmployeeID?: string;
  EmployeeName?: string;
  Office?: string;
  Position?: string;
}

export interface NTEmployeeInfo {
  uPharmaID?: number;
  uPharmaIDCode?: string;
  EmployeeName?: string;
  Img?: string;
  Office?: string;
  Position?: string;
  Sex?: string;
  BirthDay?: string;
  BirthAddress?: string;
  Address?: string;
  AddressOften?: string;
  AddressNow?: string;
  Phone?: string;
  CMND?: string;
  DateCMND?: string;
  PlaceCMND?: string;
  Email?: string;
  Matrimony?: string;
  Health?: string;
  Qualification?: string;
  TrainingPlaces?: string;
  Specialized?: string;
  Degree?: string;
  TranningTimeStart?: string;
  TranningTimeEnd?: string;
  Gifted?: string;
  WorkProcess?: string;
  EmailCompany?: string;
  DateStartWork?: string;
  Status?: number;
  StatusWork?: string;
  Place?: string;
  Branch?: string;
  Folk?: string;
  SpecializedFather?: string;
  DegreeLevel?: string;
  Time?: string;
  TimeAccept?: string;
  ManagerID?: string;
  ManagerName?: string;
  MST?: string;
  BHXH?: string;
  Nationality?: string;
  Religion?: string;
  Note?: string;
  Reason?: string;
  Setting?: string;
  LinkFace?: string;
  TypeOption?: string;
  TK_Employee?: string;
  TK_Company?: string;
  TK_Employee_Note?: string;
  TK_Company_Note?: string;
}

export interface NTEmployeePlanInfo {
  RowID?: number;
  uPharmaID?: number;
  EmployeeName?: string;
  EmployeeCode?: string;
  ShopCode?: string;
  MonthS?: number;
  YearS?: number;
  Amount?: number;
  QuantityInvoice?: number;
  QuantityCusNew?: number;
  QuantityCus?: number;
  PointRatio?: number;
  AmountR?: number;
  QuantityInvoiceR?: number;
  QuantityCusNewR?: number;
  QuantityCusR?: number;
  PointRatioR?: number;
  TimeCreate?: string;
  CreateID?: number;
  TimeModify?: string;
  ModifyID?: number;
  TimeApprove?: string;
  ApproveID?: number;
  ApproveName?: string;
  TimeApprove2?: string;
  ApproveID2?: number;
  ApproveName2?: string;
  Status?: number;
  InvoiceKD?: number;
  ImageKD?: number;
}

export interface NTGetBuyerByIDReq {
  uPharmaID?: number;
  Token?: string;
  PhoneNumber?: string;
}

export interface NTGetBuyerByIDRes {
  RespCode?: number;
  RespText?: string;
  BuyerInfo?: any;
}

export interface NTGetBuyerCallReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetBuyerCallRes {
  RespCode?: number;
  RespText?: string;
  BuyerDiagnoseLst?: Record<string, any>[];
}

export interface NTGetBuyerDiagnoseByBIDReq {
  uPharmaID?: number;
  Token?: string;
  PhoneNumber?: string;
}

export interface NTGetBuyerDiagnoseByBIDRes {
  RespCode?: number;
  RespText?: string;
  BuyerDiagnoseLst?: Record<string, any>[];
}

export interface NTGetBuyerLstByTimeReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetBuyerLstByTimeRes {
  RespCode?: number;
  RespText?: string;
  BuyerLst?: Record<string, any>[];
}

export interface NTGetBuyerLstReq {
  uPharmaID?: number;
  Token?: string;
  ShopLst?: string;
  Search?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetBuyerLstRes {
  RespCode?: number;
  RespText?: string;
  BuyerLst?: Record<string, any>[];
}

export interface NTGetCDocChangePriceLstReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
  ProductID?: string;
}

export interface NTGetCDocChangePriceLstRes {
  RespCode?: number;
  RespText?: string;
  ChangeHeaderLst?: Record<string, any>[];
}

export interface NTGetCancelProductByIDReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface NTGetCancelProductByIDRes {
  RespCode?: number;
  RespText?: string;
  CancelProductInfo?: any;
}

export interface NTGetCancelProductByTimeReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetCancelProductByTimeRes {
  RespCode?: number;
  RespText?: string;
  CancelProductLst?: Record<string, any>[];
}

export interface NTGetCancelProductFollowLstReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
  ShopCode?: string;
}

export interface NTGetCancelProductFollowLstRes {
  RespCode?: number;
  RespText?: string;
  CancelProductFollowLst?: Record<string, any>[];
}

export interface NTGetCustomerCardLstReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
  Search?: string;
}

export interface NTGetCustomerCardLstRes {
  RespCode?: number;
  RespText?: string;
  CustomerCardLst?: Record<string, any>[];
}

export interface NTGetCustomerPointDetailLstReq {
  uPharmaID?: number;
  Token?: string;
  CustomerPhone?: string;
}

export interface NTGetCustomerPointDetailLstRes {
  RespCode?: number;
  RespText?: string;
  CustomerPointDetailLst?: Record<string, any>[];
}

export interface NTGetDataLocationReq {
  uPharmaID?: number;
  Token?: string;
}

export interface NTGetDataLocationRes {
  RespCode?: number;
  RespText?: string;
  DataLocationLst?: Record<string, any>[];
}

export interface NTGetDefaultValueReq {
  uPharmaID?: number;
  Token?: string;
  TableName?: string;
  TableReference?: string;
  GLevel1?: string;
  GLevel2?: string;
  GLevel3?: string;
}

export interface NTGetDefaultValueRes {
  RespCode?: number;
  RespText?: string;
  DefaultValueLst?: Record<string, any>[];
}

export interface NTGetDetailBuyerLstReq {
  uPharmaID?: number;
  Token?: string;
  PhoneNumber?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetDetailBuyerLstRes {
  RespCode?: number;
  RespText?: string;
  SalesLineLst?: Record<string, any>[];
}

export interface NTGetDetailTimeKeepingByEmReq {
  uPharmaID?: number;
  PhoneNumber?: string;
  Token?: string;
  Month?: number;
  Year?: number;
}

export interface NTGetDetailTimeKeepingByEmRes {
  RespCode?: number;
  RespText?: string;
  DetailTimeKeepingLst?: Record<string, any>[];
}

export interface NTGetEmployeeInfoByIDReq {
  uPharmaID?: number;
  Token?: string;
  uPharmaCode?: number;
}

export interface NTGetEmployeeInfoByIDRes {
  RespCode?: number;
  RespText?: string;
  EmployeeInfo?: any;
}

export interface NTGetEmployeeInfoLstReq {
  uPharmaID?: number;
  Token?: string;
  TypeEm?: string;
}

export interface NTGetEmployeeInfoLstRes {
  RespCode?: number;
  RespText?: string;
  EmployeeLst?: Record<string, any>[];
}

export interface NTGetEmployeeOfShopReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
}

export interface NTGetEmployeeOfShopRes {
  RespCode?: number;
  RespText?: string;
  EmployeeLst?: Record<string, any>[];
}

export interface NTGetEmployeePlanDetailByEmReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  EmployeeID?: number;
  Month?: number;
  Year?: number;
}

export interface NTGetEmployeePlanDetailByEmRes {
  RespCode?: number;
  RespText?: string;
  EmployeePlanLst?: Record<string, any>[];
}

export interface NTGetEmployeePlanLstReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  Month?: number;
  Year?: number;
}

export interface NTGetEmployeePlanLstRes {
  RespCode?: number;
  RespText?: string;
  EmployeePlanLst?: Record<string, any>[];
}

export interface NTGetExistProductByShopReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
  ShopCode?: string;
  GetExpiration?: number;
}

export interface NTGetExistProductByShopRes {
  RespCode?: number;
  RespText?: string;
  ExistProductLotLst?: Record<string, any>[];
  ExistProductLotIndexLst?: Record<string, any>[];
}

export interface NTGetExistProductLstReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
}

export interface NTGetExistProductLstRes {
  RespCode?: number;
  RespText?: string;
  ExistProductLst?: Record<string, any>[];
}

export interface NTGetFileShopLstReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
}

export interface NTGetFileShopLstRes {
  RespCode?: number;
  RespText?: string;
  FileShopLst?: Record<string, any>[];
}

export interface NTGetGShopLineLstReq {
  uPharmaID?: number;
  Token?: string;
  GShopCode?: number;
}

export interface NTGetGShopLineLstRes {
  RespCode?: number;
  RespText?: string;
  GShopLineLst?: Record<string, any>[];
}

export interface NTGetGShopLstReq {
  uPharmaID?: number;
  Token?: string;
}

export interface NTGetGShopLstRes {
  RespCode?: number;
  RespText?: string;
  GShopLst?: Record<string, any>[];
}

export interface NTGetImportLotLineLstReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
  LotCode?: string;
  DocumentID?: string;
}

export interface NTGetImportLotLineLstRes {
  RespCode?: number;
  RespText?: string;
  ImportLotLineLst?: Record<string, any>[];
}

export interface NTGetImportStoreByHIdReq {
  uPharmaID?: number;
  Token?: string;
  HeaderId?: string;
}

export interface NTGetImportStoreByHIdRes {
  RespCode?: number;
  RespText?: string;
  ImportStoreHeaderInfo?: any;
  ImportLotLineLst?: Record<string, any>[];
}

export interface NTGetImportStoreReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetImportStoreRes {
  RespCode?: number;
  RespText?: string;
  ImportStoreHeaderLst?: Record<string, any>[];
}

export interface NTGetImportSuppHeaderByIDReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
}

export interface NTGetImportSuppHeaderByIDRes {
  RespCode?: number;
  RespText?: string;
  ImportSuppHeaderInfo?: any;
}

export interface NTGetImportSuppHeaderLstReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetImportSuppHeaderLstRes {
  RespCode?: number;
  RespText?: string;
  ImportSuppHeaderLst?: Record<string, any>[];
}

export interface NTGetImportSysHeaderByIDReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
}

export interface NTGetImportSysHeaderByIDRes {
  RespCode?: number;
  RespText?: string;
  ImportSysHeaderInfo?: any;
}

export interface NTGetImportSysHeaderLstReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetImportSysHeaderLstRes {
  RespCode?: number;
  RespText?: string;
  ImportSysHeaderLst?: Record<string, any>[];
}

export interface NTGetImportSysLineDesLstReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetImportSysLineDesLstRes {
  RespCode?: number;
  RespText?: string;
  ImportSysLineDesLst?: Record<string, any>[];
}

export interface NTGetInstructorByIDReq {
  uPharmaID?: number;
  Token?: string;
  uPharmaCode?: number;
}

export interface NTGetInstructorByIDRes {
  RespCode?: number;
  RespText?: string;
  UserInfo?: any;
}

export interface NTGetInventoryByShopIDReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  BranchLst?: string;
  ProductID?: string;
  LotCode?: string;
  PackageID?: number;
  StoreType?: string;
}

export interface NTGetInventoryByShopIDRes {
  RespCode?: number;
  RespText?: string;
  LocalStoreLst?: Record<string, any>[];
}

export interface NTGetInventoryShopReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  BranchLst?: string;
  ProductID?: string;
  LotCode?: string;
  PackageID?: number;
  StoreType?: string;
}

export interface NTGetInventoryShopRes {
  RespCode?: number;
  RespText?: string;
  LocalStoreLst?: Record<string, any>[];
}

export interface NTGetInventoryShopSafeReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
}

export interface NTGetInventoryShopSafeRes {
  RespCode?: number;
  RespText?: string;
  InventorySafeLst?: Record<string, any>[];
}

export interface NTGetInventorySuppByStoreIDReq {
  uPharmaID?: number;
  Token?: string;
  StoreCodeLst?: string;
  ViewShop?: boolean;
}

export interface NTGetInventorySuppByStoreIDRes {
  RespCode?: number;
  RespText?: string;
  LocalStoreLst?: Record<string, any>[];
}

export interface NTGetInventorySuppliesReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
  LotCode?: string;
  Center?: string;
}

export interface NTGetInventorySuppliesRes {
  RespCode?: number;
  RespText?: string;
  TransferSuppLineLst?: Record<string, any>[];
}

export interface NTGetInventorySystemReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  BranchLst?: string;
  ProductID?: string;
  LotCode?: string;
  PackageID?: number;
  StoreType?: string;
}

export interface NTGetInventorySystemRes {
  RespCode?: number;
  RespText?: string;
  LocalStoreLst?: Record<string, any>[];
}

export interface NTGetInventorySystemSafeReq {
  uPharmaID?: number;
  Token?: string;
  StoreSafe?: string;
}

export interface NTGetInventorySystemSafeRes {
  RespCode?: number;
  RespText?: string;
  InventorySafeLst?: Record<string, any>[];
}

export interface NTGetInvoiceOrderOnByIDReq {
  uPharmaID?: number;
  Token?: string;
  OrderID?: string;
}

export interface NTGetInvoiceOrderOnByIDRes {
  RespCode?: number;
  RespText?: string;
  InvoiceOrderOnHInfo?: any;
  ProductGroupLst?: Record<string, any>[];
}

export interface NTGetInvoiceOrderOnByTimeReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
  ShopCode?: string;
}

export interface NTGetInvoiceOrderOnByTimeRes {
  RespCode?: number;
  RespText?: string;
  InvoiceOrderOnHLst?: Record<string, any>[];
}

export interface NTGetInvoiceSalesByLotIndexReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  LotCodeIndex?: string;
}

export interface NTGetInvoiceSalesByLotIndexRes {
  RespCode?: number;
  RespText?: string;
  SalesHeaderLst?: Record<string, any>[];
}

export interface NTGetItemLstReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  ProductType?: string;
  Search?: string;
  NumberRow?: number;
  PageNumber?: number;
}

export interface NTGetItemLstRes {
  RespCode?: number;
  RespText?: string;
  ProductLst?: Record<string, any>[];
  NumberPage?: number;
}

export interface NTGetItemModelLstReq {
  uPharmaID?: number;
  Token?: string;
  Search?: string;
  NumberRow?: number;
  PageNumber?: number;
}

export interface NTGetItemModelLstRes {
  RespCode?: number;
  RespText?: string;
  ProductLst?: Record<string, any>[];
  NumberPage?: number;
}

export interface NTGetItemOrderByShopReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  Search?: string;
}

export interface NTGetItemOrderByShopRes {
  RespCode?: number;
  RespText?: string;
  InventorySafeLst?: Record<string, any>[];
}

export interface NTGetLevel1ShelfReq {
  uPharmaID?: number;
  Token?: string;
  Center?: string;
}

export interface NTGetLevel1ShelfRes {
  RespCode?: number;
  RespText?: string;
  Level1ShelfLst?: Record<string, any>[];
}

export interface NTGetLevel2ShelfReq {
  uPharmaID?: number;
  Token?: string;
  Level1Code?: string;
  Center?: string;
}

export interface NTGetLevel2ShelfRes {
  RespCode?: number;
  RespText?: string;
  Level2ShelfLst?: Record<string, any>[];
}

export interface NTGetLocalStoreLstReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  BranchLst?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetLocalStoreLstRes {
  RespCode?: number;
  RespText?: string;
  LocalStoreLst?: Record<string, any>[];
}

export interface NTGetLocalSuppStoreLstReq {
  uPharmaID?: number;
  Token?: string;
  ViewShop?: boolean;
  StoreCodeLst?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetLocalSuppStoreLstRes {
  RespCode?: number;
  RespText?: string;
  LocalStoreLst?: Record<string, any>[];
}

export interface NTGetLocationReq {
  uPharmaID?: number;
  Token?: string;
  Region?: string;
  City?: string;
  District?: string;
}

export interface NTGetLocationRes {
  RespCode?: number;
  RespText?: string;
  LocationLst?: Record<string, any>[];
}

export interface NTGetLotCodeChangeByIDReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
}

export interface NTGetLotCodeChangeByIDRes {
  RespCode?: number;
  RespText?: string;
  LotCodeChangeLst?: Record<string, any>[];
}

export interface NTGetLotCodeChangeHeaderLstReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetLotCodeChangeHeaderLstRes {
  RespCode?: number;
  RespText?: string;
  LotCodeChangeHeaderLst?: Record<string, any>[];
}

export interface NTGetLotCodeChangePackageIDDetailReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  ProductID?: string;
  LotCode?: string;
  PackageID?: number;
}

export interface NTGetLotCodeChangePackageIDDetailRes {
  RespCode?: number;
  RespText?: string;
  LotCodeChangeLst?: Record<string, any>[];
}

export interface NTGetLotCodeChangePackageIDReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
}

export interface NTGetLotCodeChangePackageIDRes {
  RespCode?: number;
  RespText?: string;
  LotCodeChangeLst?: Record<string, any>[];
}

export interface NTGetLotCodeChangePriceDetailReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  ProductID?: string;
  LotCode?: string;
  PackageID?: number;
}

export interface NTGetLotCodeChangePriceDetailRes {
  RespCode?: number;
  RespText?: string;
  LotCodeChangeLst?: Record<string, any>[];
}

export interface NTGetLotCodeChangePriceReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
}

export interface NTGetLotCodeChangePriceRes {
  RespCode?: number;
  RespText?: string;
  LotCodeChangeLst?: Record<string, any>[];
}

export interface NTGetLotCodeIndexBySalesReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  LotCodeIndex?: string;
}

export interface NTGetLotCodeIndexBySalesRes {
  RespCode?: number;
  RespText?: string;
  LotCodeOrderInfo?: any;
  PriceSalesLst?: Record<string, any>[];
}

export interface NTGetLotCodeIndexCLstReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetLotCodeIndexCLstRes {
  RespCode?: number;
  RespText?: string;
  LotCodeIndexCLst?: Record<string, any>[];
}

export interface NTGetLotCodeIndexExistByShopReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  ProductID?: string;
  LotCode?: string;
}

export interface NTGetLotCodeIndexExistByShopRes {
  RespCode?: number;
  RespText?: string;
  ImportLotLineLst?: Record<string, any>[];
}

export interface NTGetLotCodeIndexOfSalesReq {
  uPharmaID?: number;
  Token?: string;
  LotCodeIndex?: string;
}

export interface NTGetLotCodeIndexOfSalesRes {
  RespCode?: number;
  RespText?: string;
  LotCodeOrderInfo?: any;
}

export interface NTGetLotCodeInfoBySysReq {
  uPharmaID?: number;
  Token?: string;
  LotCodeIndex?: string;
  Center?: string;
}

export interface NTGetLotCodeInfoBySysRes {
  RespCode?: number;
  RespText?: string;
  ImportLotLineInfo?: any;
  LocalStoreInfo?: any;
}

export interface NTGetLotCodeReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
  LotCode?: string;
}

export interface NTGetLotCodeRes {
  RespCode?: number;
  RespText?: string;
  LotCode?: string;
  ExpirationDate?: string;
  ProductionDate?: string;
  DocumentID?: string;
}

export interface NTGetLotIndexBySalesHReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
  LotCodeIndex?: string;
}

export interface NTGetLotIndexBySalesHRes {
  RespCode?: number;
  RespText?: string;
  LotCodeOrderInfo?: any;
}

export interface NTGetLotTransferLstReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
  LotCode?: string;
  DocumentID?: string;
}

export interface NTGetLotTransferLstRes {
  RespCode?: number;
  RespText?: string;
  ImportLotLineLst?: Record<string, any>[];
}

export interface NTGetMessageByIDReq {
  uPharmaID?: number;
  Token?: string;
  MessageID?: number;
}

export interface NTGetMessageByIDRes {
  RespCode?: number;
  RespText?: string;
  MessageInfo?: any;
}

export interface NTGetMessageByTimeReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetMessageByTimeRes {
  RespCode?: number;
  RespText?: string;
  MessageLst?: Record<string, any>[];
}

export interface NTGetOrderHeaderByIDReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
}

export interface NTGetOrderHeaderByIDRes {
  RespCode?: number;
  RespText?: string;
  OrderHeaderInfo?: any;
  PromoHeaderLst?: Record<string, any>[];
  VoucherUse?: string;
  VoucherGift?: string;
  VoucherGiftDetails?: Record<string, any>[];
}

export interface NTGetOrderHeaderByShopReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
  Search?: string;
  ShopCode?: string;
  PageNumber?: number;
  NumberRow?: number;
}

export interface NTGetOrderHeaderByShopRes {
  OrderHeaderLst?: Record<string, any>[];
  RespCode?: number;
  RespText?: string;
  NumberPage?: number;
}

export interface NTGetOrderInfoSTReq {
  uPharmaID?: number;
  Token?: string;
  OrderID?: string;
}

export interface NTGetOrderInfoSTRes {
  RespCode?: number;
  RespText?: string;
  OrderID?: string;
  OrderDate?: string;
  EmployeeCode?: string;
  EmployeeName?: string;
  Position?: string;
  Office?: string;
}

export interface NTGetOrderProductNewByTimeReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
  ShopCode?: string;
}

export interface NTGetOrderProductNewByTimeRes {
  RespCode?: number;
  RespText?: string;
  OrderProductNewLst?: Record<string, any>[];
}

export interface NTGetOrderProductNewLByTimeReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetOrderProductNewLByTimeRes {
  RespCode?: number;
  RespText?: string;
  OrderProductNewLineLst?: Record<string, any>[];
}

export interface NTGetOrderProductNewLineReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: number;
}

export interface NTGetOrderProductNewLineRes {
  RespCode?: number;
  RespText?: string;
  OrderProductNewLineLst?: Record<string, any>[];
}

export interface NTGetOrganizationByIDReq {
  uPharmaID?: number;
  Token?: string;
  OrganizationID?: number;
  OrganizationCode?: string;
}

export interface NTGetOrganizationByIDRes {
  RespCode?: number;
  RespText?: string;
  OrganizationInfo?: any;
}

export interface NTGetOrganizationDetailLstReq {
  uPharmaID?: number;
  Token?: string;
}

export interface NTGetOrganizationDetailLstRes {
  RespCode?: number;
  RespText?: string;
  OrganizationDetailLst?: Record<string, any>[];
}

export interface NTGetOrganizationLstReq {
  uPharmaID?: number;
  Token?: string;
  OrgType?: string;
}

export interface NTGetOrganizationLstRes {
  RespCode?: number;
  RespText?: string;
  OrganizationLst?: Record<string, any>[];
}

export interface NTGetOrganizationTempReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
}

export interface NTGetOrganizationTempRes {
  RespCode?: number;
  RespText?: string;
  OrganizationTempLst?: Record<string, any>[];
}

export interface NTGetOverTimeByTimeReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetOverTimeByTimeRes {
  RespCode?: number;
  RespText?: string;
  OverTimeLst?: Record<string, any>[];
}

export interface NTGetPackageDefaultLstReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
}

export interface NTGetPackageDefaultLstRes {
  RespCode?: number;
  RespText?: string;
  PackageDefaultLst?: Record<string, any>[];
}

export interface NTGetPlanTransferOrderLstReq {
  uPharmaID?: number;
  Token?: string;
  Center?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetPlanTransferOrderLstRes {
  RespCode?: number;
  RespText?: string;
  PlanTransferOrderLst?: Record<string, any>[];
}

export interface NTGetPointSalesDefineLstReq {
  uPharmaID?: number;
  Token?: string;
  TimeApply?: string;
}

export interface NTGetPointSalesDefineLstRes {
  RespCode?: number;
  RespText?: string;
  PointSalesDefineLst?: Record<string, any>[];
}

export interface NTGetPointSalesEmDetailLstReq {
  uPharmaID?: number;
  EmployeeID?: number;
  Token?: string;
  ShopCode?: string;
  Month?: number;
  Year?: number;
}

export interface NTGetPointSalesEmDetailLstRes {
  RespCode?: number;
  RespText?: string;
  PointSalesEmDetailLst?: Record<string, any>[];
}

export interface NTGetPointSalesEmLstReq {
  uPharmaID?: number;
  Token?: string;
  Month?: number;
  Year?: number;
}

export interface NTGetPointSalesEmLstRes {
  RespCode?: number;
  RespText?: string;
  PointSalesEmLst?: Record<string, any>[];
}

export interface NTGetPointSalesMoreReq {
  uPharmaID?: number;
  Token?: string;
}

export interface NTGetPointSalesMoreRes {
  RespCode?: number;
  RespText?: string;
  PointSalesMoreLst?: Record<string, any>[];
}

export interface NTGetPolicyVoucherInfoReq {
  uPharmaID?: number;
  Token?: string;
  VoucherID?: string;
}

export interface NTGetPolicyVoucherInfoRes {
  RespCode?: number;
  RespText?: string;
  PolicyVoucherInfo?: any;
}

export interface NTGetPolicyVoucherLstReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetPolicyVoucherLstRes {
  RespCode?: number;
  RespText?: string;
  PolicyVoucherLst?: Record<string, any>[];
}

export interface NTGetPriceBaseByTimeReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetPriceBaseByTimeRes {
  RespCode?: number;
  RespText?: string;
  PriceBaseLst?: Record<string, any>[];
}

export interface NTGetPriceNewLstReq {
  uPharmaID?: number;
  Token?: string;
}

export interface NTGetPriceNewLstRes {
  RespCode?: number;
  RespText?: string;
  PriceSalesLst?: Record<string, any>[];
}

export interface NTGetPriceOrderByTimeReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetPriceOrderByTimeRes {
  RespCode?: number;
  RespText?: string;
  PriceOrderLst?: Record<string, any>[];
}

export interface NTGetPriceSalesByProductIDReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
  LotCode?: string;
  Center?: string;
}

export interface NTGetPriceSalesByProductIDRes {
  RespCode?: number;
  RespText?: string;
  PriceSalesLst?: Record<string, any>[];
}

export interface NTGetPriceSalesLstReq {
  uPharmaID?: number;
  Token?: string;
}

export interface NTGetPriceSalesLstRes {
  RespCode?: number;
  RespText?: string;
  PriceSalesLst?: Record<string, any>[];
}

export interface NTGetProductActivatedLstReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
}

export interface NTGetProductActivatedLstRes {
  RespCode?: number;
  RespText?: string;
  ProductActivatedLst?: Record<string, any>[];
}

export interface NTGetProductClassLstReq {
  uPharmaID?: number;
  Token?: string;
  ClassID?: string;
  ClassName?: string;
}

export interface NTGetProductClassLstRes {
  RespCode?: number;
  RespText?: string;
  ProductClassLst?: Record<string, any>[];
}

export interface NTGetProductDoseReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
}

export interface NTGetProductDoseRes {
  RespCode?: number;
  RespText?: string;
  ProductDoseLst?: Record<string, any>[];
}

export interface NTGetProductGroupLstReq {
  uPharmaID?: number;
  Token?: string;
}

export interface NTGetProductGroupLstRes {
  RespCode?: number;
  RespText?: string;
  ProductGroupLst?: Record<string, any>[];
}

export interface NTGetProductImportLastReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
}

export interface NTGetProductImportLastRes {
  RespCode?: number;
  RespText?: string;
  ProductImportLastLst?: Record<string, any>[];
}

export interface NTGetProductInfoReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
}

export interface NTGetProductInfoRes {
  RespCode?: number;
  RespText?: string;
  ProductInfo?: any;
}

export interface NTGetProductOfSupplierReq {
  uPharmaID?: number;
  Token?: string;
  CustomerID?: number;
}

export interface NTGetProductOfSupplierRes {
  RespCode?: number;
  RespText?: string;
  ProductLst?: Record<string, any>[];
}

export interface NTGetProductPackageByPIDLstReq {
  uPharmaID?: number;
  Token?: string;
  ProductIDLst?: string;
}

export interface NTGetProductPackageByPIDLstRes {
  RespCode?: number;
  RespText?: string;
  ProductID?: string;
  ProductName?: string;
  ProductPackageLst?: Record<string, any>[];
}

export interface NTGetProductPackageFastReq {
  uPharmaID?: number;
  Token?: string;
}

export interface NTGetProductPackageFastRes {
  RespCode?: number;
  RespText?: string;
  ProductPackageLst?: Record<string, any>[];
}

export interface NTGetProductPackageLstReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
  ForSales?: boolean;
}

export interface NTGetProductPackageLstRes {
  RespCode?: number;
  RespText?: string;
  ProductID?: string;
  ProductName?: string;
  ProductPackageLst?: Record<string, any>[];
}

export interface NTGetProductPostLstReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  ProductType?: string;
  StoreType?: string;
  Search?: string;
  NumberRow?: number;
  PageNumber?: number;
}

export interface NTGetProductPostLstRes {
  RespCode?: number;
  RespText?: string;
  ProductPostLst?: Record<string, any>[];
  NumberPage?: number;
}

export interface NTGetProductRelationshipReq {
  uPharmaID?: number;
  Token?: string;
  Rate?: number;
}

export interface NTGetProductRelationshipRes {
  RespCode?: number;
  RespText?: string;
  ProductRelationshipLst?: Record<string, any>[];
}

export interface NTGetProductShelfReq {
  uPharmaID?: number;
  Token?: string;
  Center?: string;
  Level2Code?: string;
}

export interface NTGetProductShelfRes {
  RespCode?: number;
  RespText?: string;
  ProductShelfLst?: Record<string, any>[];
}

export interface NTGetProductSupplierLstReq {
  uPharmaID?: number;
  Token?: string;
  CustomerID?: number;
}

export interface NTGetProductSupplierLstRes {
  RespCode?: number;
  RespText?: string;
  ProductSupplierLst?: Record<string, any>[];
}

export interface NTGetProductSuppliesReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
}

export interface NTGetProductSuppliesRes {
  RespCode?: number;
  RespText?: string;
  ProductLst?: Record<string, any>[];
}

export interface NTGetProductUnitPrintByPIDReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
}

export interface NTGetProductUnitPrintByPIDRes {
  RespCode?: number;
  RespText?: string;
  NTProductUnitPrintLst?: Record<string, any>[];
}

export interface NTGetProductWarningReq {
  uPharmaID?: number;
  Token?: string;
}

export interface NTGetProductWarningRes {
  RespCode?: number;
  RespText?: string;
  ProductWarningLst?: Record<string, any>[];
}

export interface NTGetPromoHeaderByIDReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface NTGetPromoHeaderByIDRes {
  RespCode?: number;
  RespText?: string;
  PromoHeaderInfo?: any;
}

export interface NTGetPromoHeaderLstByShopReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
}

export interface NTGetPromoHeaderLstByShopRes {
  RespCode?: number;
  RespText?: string;
  PromoHeaderLst?: Record<string, any>[];
}

export interface NTGetPromoHeaderLstReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetPromoHeaderLstRes {
  RespCode?: number;
  RespText?: string;
  PromoHeaderLst?: Record<string, any>[];
}

export interface NTGetPromoShopLstReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface NTGetPromoShopLstRes {
  RespCode?: number;
  RespText?: string;
  PromoShopLst?: Record<string, any>[];
}

export interface NTGetQuantityStampSysReq {
  uPharmaID?: number;
  Token?: string;
  BranchLst?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetQuantityStampSysRes {
  RespCode?: number;
  RespText?: string;
  LocalStoreLst?: Record<string, any>[];
}

export interface NTGetReportSalesByShopReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
  ShopCode?: string;
}

export interface NTGetReportSalesByShopRes {
  ReportSalesLst?: Record<string, any>[];
  ReportAdjustLst?: Record<string, any>[];
  RespCode?: number;
  RespText?: string;
}

export interface NTGetReportSalesSpeedReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
  ProductID?: string;
  GetType?: string;
  ViewCity?: number;
  ShopLst?: string;
}

export interface NTGetReportSalesSpeedRes {
  RespCode?: number;
  RespText?: string;
  SalesSpeedLst?: Record<string, any>[];
}

export interface NTGetReturnDocByIDReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface NTGetReturnDocByIDRes {
  RespCode?: number;
  RespText?: string;
  ReturnStoreInfo?: any;
}

export interface NTGetReturnDocByTimeReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetReturnDocByTimeRes {
  RespCode?: number;
  RespText?: string;
  ReturnStoreLst?: Record<string, any>[];
}

export interface NTGetReturnShopByIDReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface NTGetReturnShopByIDRes {
  RespCode?: number;
  RespText?: string;
  ReturnShopInfo?: any;
}

export interface NTGetReturnShopByTimeReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetReturnShopByTimeRes {
  RespCode?: number;
  RespText?: string;
  ReturnShopLst?: Record<string, any>[];
}

export interface NTGetSalesHeaderByIDReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
}

export interface NTGetSalesHeaderByIDRes {
  RespCode?: number;
  RespText?: string;
  SalesHeaderInfo?: any;
  PromoHeaderLst?: Record<string, any>[];
}

export interface NTGetSalesHeaderByShopReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
  Search?: string;
  ShopCode?: string;
  PageNumber?: number;
  NumberRow?: number;
}

export interface NTGetSalesHeaderByShopRes {
  SalesHeaderLst?: Record<string, any>[];
  SalesAdjustLst?: Record<string, any>[];
  RespCode?: number;
  RespText?: string;
  NumberPage?: number;
}

export interface NTGetSalesHeaderLastByBIDReq {
  uPharmaID?: number;
  Token?: string;
  PhoneNumber?: string;
}

export interface NTGetSalesHeaderLastByBIDRes {
  RespCode?: number;
  RespText?: string;
  SalesHeaderInfo?: any;
}

export interface NTGetSalesLstByHandingOverReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface NTGetSalesLstByHandingOverRes {
  RespCode?: number;
  RespText?: string;
  SalesHeaderLst?: Record<string, any>[];
}

export interface NTGetSalesmanByShopReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
}

export interface NTGetSalesmanByShopRes {
  RespCode?: number;
  RespText?: string;
  OrganizationLst?: Record<string, any>[];
}

export interface NTGetSampleDiseaseReq {
  uPharmaID?: number;
  Token?: string;
  DiseaseCode?: string;
}

export interface NTGetSampleDiseaseRes {
  RespCode?: number;
  RespText?: string;
  SampleInvoiceLst?: Record<string, any>[];
}

export interface NTGetShiftWorkByTimeReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetShiftWorkByTimeRes {
  RespCode?: number;
  RespText?: string;
  ShiftWorkLst?: Record<string, any>[];
}

export interface NTGetShiftWorkDefineReq {
  uPharmaID?: number;
  Token?: string;
}

export interface NTGetShiftWorkDefineRes {
  RespCode?: number;
  RespText?: string;
  ShiftWorkDefineLst?: Record<string, any>[];
}

export interface NTGetSpeedSuppliesReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
}

export interface NTGetSpeedSuppliesRes {
  RespCode?: number;
  RespText?: string;
  SpeedSuppliesLst?: Record<string, any>[];
}

export interface NTGetStampHistoryByLotIndexReq {
  uPharmaID?: number;
  Token?: string;
  LotCodeIndex?: string;
}

export interface NTGetStampHistoryByLotIndexRes {
  RespCode?: number;
  RespText?: string;
  StampHistoryLst?: Record<string, any>[];
}

export interface NTGetStampSysByDocIDReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
  ProductID?: string;
  LotCode?: string;
}

export interface NTGetStampSysByDocIDRes {
  RespCode?: number;
  RespText?: string;
  ImportLotLineLst?: Record<string, any>[];
}

export interface NTGetStoreCardByProductIDReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
  LotCode?: string;
  ViewAll?: boolean;
  ViewStore?: boolean;
  ShopLst?: string;
  StoreLst?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetStoreCardByProductIDRes {
  RespCode?: number;
  RespText?: string;
  StoreCardLst?: Record<string, any>[];
}

export interface NTGetStoreFollowLstReq {
  uPharmaID?: number;
  Token?: string;
}

export interface NTGetStoreFollowLstRes {
  RespCode?: number;
  RespText?: string;
  StoreFollowLst?: Record<string, any>[];
}

export interface NTGetStoreTypeLstReq {
  uPharmaID?: number;
  Token?: string;
}

export interface NTGetStoreTypeLstRes {
  RespCode?: number;
  RespText?: string;
  StoreTypeLst?: Record<string, any>[];
}

export interface NTGetSuppUserLstByTimeReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetSuppUserLstByTimeRes {
  RespCode?: number;
  RespText?: string;
  SuppUserLst?: Record<string, any>[];
}

export interface NTGetSupplierBankAccountLstReq {
  uPharmaID?: number;
  Token?: string;
  CustomerID?: number;
  CustomerCode?: string;
}

export interface NTGetSupplierBankAccountLstRes {
  RespCode?: number;
  RespText?: string;
  PaymentDay?: number;
  SupplierBankAccountLst?: Record<string, any>[];
}

export interface NTGetSupplierByCodeReq {
  uPharmaID?: number;
  Token?: string;
  CustomerCode?: string;
}

export interface NTGetSupplierByCodeRes {
  RespCode?: number;
  RespText?: string;
  SupplierInfo?: any;
}

export interface NTGetSupplierCommitLstReq {
  uPharmaID?: number;
  Token?: string;
  CustomerID?: number;
}

export interface NTGetSupplierCommitLstRes {
  RespCode?: number;
  RespText?: string;
  SupplierCommitLst?: Record<string, any>[];
}

export interface NTGetSupplierContactLstReq {
  uPharmaID?: number;
  Token?: string;
  CustomerID?: number;
}

export interface NTGetSupplierContactLstRes {
  RespCode?: number;
  RespText?: string;
  SupplierContactLst?: Record<string, any>[];
}

export interface NTGetSupplierFileLstReq {
  uPharmaID?: number;
  Token?: string;
}

export interface NTGetSupplierFileLstRes {
  RespCode?: number;
  RespText?: string;
  SupplierFileLst?: Record<string, any>[];
}

export interface NTGetSupplierFileOldLstReq {
  uPharmaID?: number;
  Token?: string;
  CustomerID?: number;
}

export interface NTGetSupplierFileOldLstRes {
  RespCode?: number;
  RespText?: string;
  SupplierFileOldLst?: Record<string, any>[];
}

export interface NTGetSupplierFromFastReq {
  uPharmaID?: number;
  CustomerCode?: string;
  Token?: string;
}

export interface NTGetSupplierFromFastRes {
  RespCode?: number;
  RespText?: string;
  SupplierInfo?: any;
}

export interface NTGetSupplierLstReq {
  uPharmaID?: number;
  Token?: string;
}

export interface NTGetSupplierLstRes {
  RespCode?: number;
  RespText?: string;
  SupplierLst?: Record<string, any>[];
}

export interface NTGetSupplierPolicyReq {
  uPharmaID?: number;
  Token?: string;
  CustomerID?: number;
  CustomerCode?: string;
  ProductID?: string;
}

export interface NTGetSupplierPolicyRes {
  RespCode?: number;
  RespText?: string;
  SupplierPolicyLst?: Record<string, any>[];
}

export interface NTGetSupplierProductFileReq {
  uPharmaID?: number;
  Token?: string;
  CustomerID?: number;
  ProductID?: string;
}

export interface NTGetSupplierProductFileRes {
  RespCode?: number;
  RespText?: string;
  SupplierProductFileLst?: Record<string, any>[];
}

export interface NTGetSupplierSurveyReq {
  uPharmaID?: number;
  Token?: string;
  CustomerID?: number;
  ProductID?: string;
}

export interface NTGetSupplierSurveyRes {
  RespCode?: number;
  RespText?: string;
  SupplierSurveyLst?: Record<string, any>[];
}

export interface NTGetSupplierWorkLstReq {
  uPharmaID?: number;
  Token?: string;
  CustomerID?: number;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetSupplierWorkLstRes {
  RespCode?: number;
  RespText?: string;
  SupplierWorkLst?: Record<string, any>[];
}

export interface NTGetTimeKeepingLstReq {
  uPharmaID?: number;
  Token?: string;
  Month?: number;
  Year?: number;
}

export interface NTGetTimeKeepingLstRes {
  RespCode?: number;
  RespText?: string;
  EmTimeKeepingLst?: Record<string, any>[];
  EmShiftLst?: Record<string, any>[];
  EmCheckInLst?: Record<string, any>[];
  OverTimeReportLst?: Record<string, any>[];
}

export interface NTGetTransferOrderByTimeReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetTransferOrderByTimeRes {
  RespCode?: number;
  RespText?: string;
  TransferOrderHeaderLst?: Record<string, any>[];
}

export interface NTGetTransferOrderCenterByTimeReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetTransferOrderCenterByTimeRes {
  RespCode?: number;
  RespText?: string;
  TransferOrderHeaderLst?: Record<string, any>[];
}

export interface NTGetTransferOrderCenterDetailByIDReq {
  uPharmaID?: number;
  Token?: string;
  RowIDLst?: string;
}

export interface NTGetTransferOrderCenterDetailByIDRes {
  RespCode?: number;
  RespText?: string;
  TransferOrderDetailLst?: Record<string, any>[];
}

export interface NTGetTransferOrderCenterDetailByTimeReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetTransferOrderCenterDetailByTimeRes {
  RespCode?: number;
  RespText?: string;
  TransferOrderDetailLst?: Record<string, any>[];
}

export interface NTGetTransferOrderCenterInfoReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
}

export interface NTGetTransferOrderCenterInfoRes {
  RespCode?: number;
  RespText?: string;
  TransferOrderHeaderInfo?: any;
}

export interface NTGetTransferOrderFirstLstReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
}

export interface NTGetTransferOrderFirstLstRes {
  RespCode?: number;
  RespText?: string;
  TransferOrderFirstLLst?: Record<string, any>[];
  ShopLst?: Record<string, any>[];
}

export interface NTGetTransferOrderHeaderInfoReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
}

export interface NTGetTransferOrderHeaderInfoRes {
  RespCode?: number;
  RespText?: string;
  TransferOrderHeaderInfo?: any;
}

export interface NTGetTransferOrderLotReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
  RowIDLst?: string;
}

export interface NTGetTransferOrderLotRes {
  RespCode?: number;
  RespText?: string;
  TransferOrderLotLst?: Record<string, any>[];
}

export interface NTGetTransferOrderLotV2Req {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
  ProductID?: string;
}

export interface NTGetTransferOrderLotV2Res {
  RespCode?: number;
  RespText?: string;
  TransferOrderLotLst?: Record<string, any>[];
  TransferShopLst?: Record<string, any>[];
}

export interface NTGetTransferOrderProcessReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
}

export interface NTGetTransferOrderProcessRes {
  RespCode?: number;
  RespText?: string;
  TransferOrderLineLst?: Record<string, any>[];
}

export interface NTGetTransferOrderSysByTime2Req {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
  UnFinish?: number;
}

export interface NTGetTransferOrderSysByTime2Res {
  RespCode?: number;
  RespText?: string;
  PlanTransferOrderLst?: Record<string, any>[];
}

export interface NTGetTransferOrderSysByTimeReq {
  uPharmaID?: number;
  Token?: string;
  IsPriority?: number;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetTransferOrderSysByTimeRes {
  RespCode?: number;
  RespText?: string;
  TransferOrderHeaderLst?: Record<string, any>[];
}

export interface NTGetTransferOrderedQuaByDocReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
  ProductID?: string;
}

export interface NTGetTransferOrderedQuaByDocRes {
  RespCode?: number;
  RespText?: string;
  TransferOrderLotLst?: Record<string, any>[];
}

export interface NTGetTransferSuppByHIdReq {
  uPharmaID?: number;
  Token?: string;
  HeaderId?: string;
}

export interface NTGetTransferSuppByHIdRes {
  RespCode?: number;
  RespText?: string;
  TransferSuppHeaderInfo?: any;
}

export interface NTGetTransferSuppReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface NTGetTransferSuppRes {
  RespCode?: number;
  RespText?: string;
  TransferSuppHeaderLst?: Record<string, any>[];
}

export interface NTGetUserDefineLstReq {
  uPharmaID?: number;
  Token?: string;
}

export interface NTGetUserDefineLstRes {
  RespCode?: number;
  RespText?: string;
  UserDefineLst?: Record<string, any>[];
}

export interface NTGetUserInfoByIDReq {
  uPharmaID?: number;
  Token?: string;
}

export interface NTGetUserInfoByIDRes {
  RespCode?: number;
  RespText?: string;
  UserInfo?: any;
}

export interface NTGetUserOrganizationLstReq {
  uPharmaID?: number;
  Token?: string;
  OrganizationID?: number;
  uPharmaCode?: number;
}

export interface NTGetUserOrganizationLstRes {
  RespCode?: number;
  RespText?: string;
  OrganizationLst?: Record<string, any>[];
}

export interface NTGetUserProductGroupReq {
  uPharmaID?: number;
  Token?: string;
}

export interface NTGetUserProductGroupRes {
  RespCode?: number;
  RespText?: string;
  UserProductGroupLst?: Record<string, any>[];
}

export interface NTGetUserSupplierReq {
  uPharmaID?: number;
  Token?: string;
}

export interface NTGetUserSupplierRes {
  RespCode?: number;
  RespText?: string;
  SupplierFollowerLst?: Record<string, any>[];
}

export interface NTGetVoucherOfCustomerReq {
  uPharmaID?: number;
  Token?: string;
  PhoneNumber?: string;
}

export interface NTGetVoucherOfCustomerRes {
  RespCode?: number;
  RespText?: string;
  PolicyVoucherLst?: Record<string, any>[];
}

export interface NTImportLotLineInfo {
  RowID?: number;
  ProductID?: string;
  DocumentID?: string;
  LotCode?: string;
  LotCodeIndex?: string;
  TimeCreate?: string;
  CreaterID?: number;
  LableName?: string;
  ProductName?: string;
  UnitOfMeasure?: string;
  UnitPrice?: number;
  Genuine?: number;
  QuantityUnit?: number;
  QuantityUnitMin?: number;
  QuantityExist?: number;
  StoreType?: string;
  Status?: number;
  PackageID?: number;
  PackageStampID?: number;
  UnitOfStamp?: string;
  StatusSp?: number;
  ModifyIDSp?: number;
  TimeModifySp?: string;
  ShopCode?: string;
  ExpirationDate?: string;
  Country?: string;
  LotCodeIndexNew?: string;
}

export interface NTImportStoreHeaderInfo {
  RowID?: number;
  DocumentID?: string;
  ReceiverCode?: string;
  ReceiverName?: string;
  ReceiverAddress?: string;
  CreatorID?: number;
  TimeCreater?: string;
  CreatorNote?: string;
  ApproverID?: number;
  ApproverNote?: string;
  TimeApprove?: string;
  SenderCode?: string;
  SenderName?: string;
  Status?: number;
  TimeModify?: string;
  ModifyId?: number;
  TotalAmount?: number;
  EmployeeName?: string;
  EmployeeCode?: string;
  OrderId?: string;
  CreatorName?: string;
  ApproverName?: string;
  PackingID?: number;
  PackingName?: string;
  PackingNote?: string;
  TimePacking?: string;
  TimeShip?: string;
  FeeShip?: number;
  NoteShip?: string;
  CreateShipID?: number;
  CreateShipName?: string;
  QuantityBox?: number;
  TypeDoc?: number;
  TranType?: string;
  TimeUp?: string;
  AccUp?: string;
  DMSID?: string;
  Genuine?: number;
  DocumentSYTID?: string;
  TimeUpload?: string;
  ImportStoreLineLst?: Record<string, any>[];
}

export interface NTImportSuppHeaderInfo {
  ReferenceCode?: string;
  DocumentID?: string;
  CreateID?: number;
  CreateCode?: string;
  CreateName?: string;
  TimeCreate?: string;
  ApproverID?: number;
  ApproverCode?: string;
  ApproverName?: string;
  CreateNote?: string;
  TimeModify?: string;
  ModifyId?: number;
  ModifyCode?: string;
  ModifyName?: string;
  ApproveNote?: string;
  TimeApprove?: string;
  CustomerID?: number;
  CustomerCode?: string;
  CustomerName?: string;
  CustomerAddress?: string;
  CustomerContact?: string;
  PostingDate?: string;
  Description?: string;
  PaymentMethod?: string;
  Center?: string;
  TotalAmount?: number;
  TotalAmountVAT?: number;
  DiscountMoney?: number;
  DiscountType?: number;
  Status?: number;
  ImportSuppLineLst?: Record<string, any>[];
}

export interface NTImportSysHeaderInfo {
  ReferenceCode?: string;
  ReferenceFast?: string;
  DocumentID?: string;
  CreateID?: number;
  CreateCode?: string;
  CreateName?: string;
  TimeCreate?: string;
  ApproverID?: number;
  ApproverCode?: string;
  ApproverName?: string;
  CreateNote?: string;
  TimeModify?: string;
  ModifyId?: number;
  ModifyCode?: string;
  ModifyName?: string;
  ApproveNote?: string;
  TimeApprove?: string;
  CustomerID?: number;
  CustomerCode?: string;
  CustomerName?: string;
  CustomerAddress?: string;
  CustomerContact?: string;
  PostingDate?: string;
  Description?: string;
  PaymentMethod?: string;
  DocumentPNK?: string;
  TotalAmount?: number;
  TotalAmountVAT?: number;
  TotalAmountReal?: number;
  QuantityProduct?: number;
  DiscountMoney?: number;
  DiscountType?: number;
  Status?: number;
  TypeDoc?: number;
  Center?: string;
  LocationType?: number;
  ShopCode?: string;
  ShopName?: string;
  StatusSp?: number;
  ModifyIDSp?: number;
  TimeModifySp?: string;
  TimeUp?: string;
  AccUp?: string;
  DMSID?: string;
  BuyerName?: string;
  ImportSysLineLst?: Record<string, any>[];
}

export interface NTInventorySafeInfo {
  ProductID?: string;
  ProductName?: string;
  ModifyName?: string;
  TimeModify?: string;
  PackageID?: number;
  QuantityMin?: number;
  QuantityMax?: number;
  Obligatory?: number;
  QuantityMinDefault?: number;
  QuantityMaxDefault?: number;
  QuantityUnit?: number;
  QuantityExist?: number;
  QuantityExistCenter?: number;
  UnitOfMeasure?: string;
  ActivatedProduct?: string;
  WarningDes?: string;
  EmFollow?: string;
  ExpirationDate?: string;
  GLevel?: string;
  RepeatInvoice?: number;
  QuantityAVG?: number;
  QuantitySalesLast?: number;
  ActivatedMaterial?: string;
  QuantitySuggest?: number;
  Point?: number;
}

export interface NTInvoiceOrderOnHInfo {
  OrderID?: string;
  CustomerContact?: string;
  CustomerName?: string;
  CreateDate?: string;
  PaymentMethod?: number;
  PaidAmount?: number;
  RecipientName?: string;
  RecipientPhoneNumber?: string;
  TotalProductAmount?: number;
  DirectDiscount?: number;
  VoucherDiscount?: number;
  ShippingFee?: number;
  TotalAmount?: number;
  StoreAmount?: number;
  Address?: string;
  Note?: string;
  AdminNote?: string;
  CodeVD?: string;
  DocReturnID?: string;
  AddressLine1?: string;
  AddressLine2?: string;
  AddressLine3?: string;
  StoreCode?: string;
  StoreName?: string;
  Channel?: string;
  OrderType?: number;
  Status?: number;
  InvoiceOrderOnLLst?: Record<string, any>[];
}

export interface NTLocalStoreInfo {
  ProductID?: string;
  ProductName?: string;
  ReferenceCode?: string;
  LotCode?: string;
  ProductionDate?: string;
  ExpirationDate?: string;
  Location?: string;
  Certificate?: string;
  Supplier?: string;
  Status?: number;
  Quantity?: number;
  QuantityE?: number;
  QuantityT?: number;
  QuantityDel?: number;
  UnitOfMeasure?: string;
  UnitPrice?: number;
  VAT?: number;
  TimeCreate?: string;
  CreaterID?: number;
  BasePrice?: number;
  ImportPrice?: number;
  ImportExport?: number;
  StoreCode?: string;
  City?: string;
  Center?: string;
  SafeNote?: string;
  RegistrationNumber?: string;
  ManufacturerCoutry?: string;
  ManufacturerName?: string;
  PackageID?: number;
  PackageStampID?: number;
  QuantityStamp?: number;
  UnitOfStamp?: string;
  PriceOfStamp?: number;
  DocumentTHT?: string;
  TimeDocTHT?: string;
  IsException?: number;
}

export interface NTLockCustomerCardReq {
  uPharmaID?: number;
  Token?: string;
  CardID?: string;
}

export interface NTLockCustomerCardRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTLotCodeIndexCInfo {
  ProductID?: string;
  ProductName?: string;
  LotCode?: string;
  LotCodeIndex?: string;
  LotCodeIndexC?: string;
  TimeCreate?: string;
  CreateID?: number;
}

export interface NTLotCodeOrderInfo {
  ProductID?: string;
  ProductName?: string;
  UnitPrice?: number;
  UnitOfMeasure?: string;
  LotCode?: string;
  DocumentID?: string;
  LotCodeIndex?: string;
  QuantityTarget?: number;
  QuantitySales?: number;
  QuantityUnit?: number;
  QuantityUnitMin?: number;
  Status?: number;
  PackageID?: number;
  PackageStampID?: number;
  PackageTarget?: number;
  UnitOfTarget?: string;
  UnitOfStamp?: string;
  VAT?: number;
  Ratio?: number;
  PriceInitial?: number;
  Genuine?: number;
  PromoDocID?: string;
  ExpirationDate?: string;
  Country?: string;
}

export interface NTLotPasswordReq {
  UserName?: string;
}

export interface NTLotPasswordRes {
  RespCode?: number;
  RespText?: string;
  Notify?: string;
}

export interface NTMessageInfo {
  MessageID?: number;
  SubjectMess?: string;
  BodyMess?: string;
  SenderName?: string;
  ShopCode?: string;
  ShopName?: string;
  TimeSent?: string;
  TypeMess?: string;
  TimeRead?: string;
  StatusRead?: number;
}

export interface NTNoteBuyerCallReq {
  uPharmaID?: number;
  Token?: string;
  RowID?: number;
  Note?: string;
  Status?: number;
}

export interface NTNoteBuyerCallRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTNoteTransferOrderLotReq {
  uPharmaID?: number;
  Token?: string;
  RowIDLst?: string;
  Note?: string;
}

export interface NTNoteTransferOrderLotRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTOrderHeaderInfo {
  RowID?: number;
  HeaderID?: string;
  ReferentCode?: string;
  TimeSystem?: string;
  SalesID?: number;
  SalesCode?: string;
  SalesName?: string;
  InvoiceType?: number;
  CustomerName?: string;
  CustomerContact?: string;
  CustomerAddress?: string;
  CustomerAge?: number;
  CustomerWeight?: number;
  CustomerDes?: string;
  CustomerImage?: string;
  CustomerSex?: string;
  CustomerPay?: number;
  DoctorName?: string;
  DoctorAddress?: string;
  DateKD?: string;
  CustomerBirthday?: string;
  CustomerDiagnose?: string;
  LinkImage?: string;
  Email?: string;
  NoteSales?: string;
  Invoice?: number;
  ShopCode?: string;
  ShopName?: string;
  OrderDate?: string;
  Ship?: number;
  SalesType?: string;
  ExpirationDate?: string;
  PostingDate?: string;
  Status?: number;
  UserOrderID?: string;
  UserOrderName?: string;
  OrderDocumentID?: string;
  IntroduceID?: number;
  IntroduceName?: string;
  ShopAdvise?: string;
  QRCode?: string;
  DDTL?: number;
  PromoDocID?: string;
  PromoName?: string;
  VNPayNote?: string;
  TimeCall?: string;
  OnlineID?: string;
  Consultation?: string;
  BuyerType?: string;
  QuantityProduct?: number;
  AmountIncludingVAT?: number;
  OrderLineLst?: Record<string, any>[];
  OrderSuppLineLst?: Record<string, any>[];
  LotCodeOrderLst?: Record<string, any>[];
}

export interface NTOrderProductNewInfo {
  RowID?: number;
  CreateID?: number;
  CreateName?: string;
  TimeCreate?: string;
  ShopCode?: string;
  ShopName?: string;
  TimeModify?: string;
  ModifyID?: number;
  ModifyName?: string;
  ApproveID?: number;
  ApproveName?: string;
  TimeApprove?: string;
  ApproveNote?: string;
  City?: string;
  Region?: string;
  ProductID?: string;
  ProductName?: string;
  Quantity?: number;
  UnitOfMeasure?: string;
  Reason?: string;
  IsQuote?: number;
  ExpirationDate?: string;
  LinkImage?: string;
  Status?: number;
  ActivatedMaterial?: string;
  SampleType?: number;
  SamplePrice?: number;
  NoteOther?: string;
  FollowID?: number;
  FollowName?: string;
  TimeFollow?: string;
  ApproveID2?: number;
  ApproveName2?: string;
  TimeApprove2?: string;
  ApproveNote2?: string;
  TimeExpected?: string;
  Packing?: string;
  TimeModifyStatus?: string;
  ModifyStatusID?: number;
  ModifyStatusName?: string;
  ModifyStatusNote?: string;
}

export interface NTOrderProductNewLineInfo {
  RowID?: number;
  DocumentID?: number;
  ProductID?: string;
  ProductName?: string;
  UnitOfMeasure?: string;
  Quantity?: number;
  VAT?: number;
  Note?: string;
  Status?: number;
  TimeCreate?: string;
  CreateID?: number;
  CreateName?: string;
  TimeModify?: string;
  ModifyID?: number;
  CustomerName?: string;
  ShipToAddress?: string;
  PaymentMethod?: string;
  NoteLine?: string;
}

export interface NTOrganizationDetailInfo {
  OrganizationID?: number;
  OrganizationType?: string;
  ShopCode?: string;
  OrganizationName?: string;
  Address?: string;
  City?: string;
  District?: string;
  Ward?: string;
  Latitiude?: number;
  Longitude?: number;
  RepresentID?: number;
  TimeCreate?: string;
  TimeModify?: string;
  CreaterID?: number;
  ModifyID?: number;
  CreateName?: string;
  ModifyName?: string;
  Region?: string;
  Description?: string;
  Hotline?: string;
  Status?: number;
  Pharmacist?: string;
  PharmacistPhone?: string;
  PharmacistAddress?: string;
  DateCCHND?: string;
  DateKTCM?: string;
  DateKTCMNext?: string;
  DateTDNext?: string;
  AccSYT?: string;
  FollowTTBYT?: string;
  PublicCode?: string;
  State?: string;
  DKKDDCode?: string;
  GPP?: string;
  GPPDate?: string;
  DateTemp?: string;
  DateTempNext?: string;
  TypeTemp?: string;
  Note?: string;
}

export interface NTOrganizationInfo {
  DocumentID?: number;
  OrganizationID?: number;
  OrganizationType?: string;
  ShopCode?: string;
  ShopName?: string;
  OrganizationName?: string;
  Address?: string;
  City?: string;
  District?: string;
  Ward?: string;
  Latitiude?: number;
  Longitude?: number;
  RepresentID?: number;
  TimeCreate?: string;
  TimeUpdate?: string;
  CreaterID?: number;
  UpdateID?: number;
  Region?: string;
  Description?: string;
  Hotline?: string;
  Status?: number;
  TransferOdd?: number;
  uPharmaID?: number;
  uPharmaIDCode?: string;
  EmployeeName?: string;
  PhoneNumber?: string;
  UserDefineID?: number;
  UserDefineName?: string;
  TimeStartWork?: string;
  TimeEndWork?: string;
  UStatus?: number;
  GPPCode?: string;
  DKKDDCode?: string;
  CenterCode?: string;
  TimeOrderFirst?: string;
}

export interface NTOrganizationTempInfo {
  RowID?: number;
  ShopCode?: string;
  TypeTemp?: string;
  DateTemp?: string;
  DateTempNext?: string;
  TimeModify?: string;
  ModifyID?: number;
  TimeCreate?: string;
  CreateID?: number;
  Status?: number;
}

export interface NTOverTimeInfo {
  RowID?: number;
  ShopCode?: string;
  EmployeeID?: number;
  EmployeeCode?: string;
  EmployeeName?: string;
  PhoneNumber?: string;
  QuantityHour?: number;
  CreateID?: number;
  TimeCreate?: string;
  WorkDate?: string;
  Status?: number;
  Note?: string;
  Mission?: string;
  ApproveID?: number;
  ApproveName?: string;
  TimeApprove?: string;
  TimeStart?: string;
  TimeEnd?: string;
  ModifyID?: number;
  TimeModify?: string;
  City?: string;
  District?: string;
  Ward?: string;
}

export interface NTPaymentDebtOrderHeaderByIDReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
}

export interface NTPaymentDebtOrderHeaderByIDRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTPolicyVoucherInfo {
  RowID?: number;
  VoucherID?: string;
  VoucherType?: number;
  UnitType?: number;
  VoucherName?: string;
  Point?: number;
  TimeCreate?: string;
  CreateID?: number;
  Status?: number;
  InvoiceOrderID?: string;
  CustomerID?: string;
  CustomerName?: string;
  AmountCondition?: number;
  Celling?: number;
  ExpirationDate?: string;
  InvoiceOrderUseID?: string;
  CustomerUseID?: string;
  CustomerUseName?: string;
  TimeUse?: string;
  TimeModify?: string;
  ModifyID?: number;
}

export interface NTPriceOrderInfo {
  OrderID?: number;
  ProductID?: string;
  ProductName?: string;
  ProfitMax?: number;
  ProfitMin?: number;
  PriceApprove?: number;
  PriceOrder?: number;
  OrderType?: string;
  IsCommit?: number;
  Note?: string;
  TimeCreate?: string;
  CreateID?: number;
  CreateName?: string;
  TimeModify?: string;
  ModifyID?: number;
  TimeApprove?: string;
  ApproveID?: number;
  Status?: number;
  BasePrice?: number;
  UnitOfSales?: string;
  TimeApply?: string;
  PriceOrderLineLst?: Record<string, any>[];
}

export interface NTProductInfo {
  ProductID?: string;
  ProductName?: string;
  ProductName2?: string;
  VAT?: number;
  KD?: number;
  KSDB?: string;
  RuleGroup?: string;
  UnitOfMeasure?: string;
  UnitOfFast?: string;
  UnitPrice?: number;
  StorageCondition?: string;
  ManufacturerName?: string;
  Distributor?: string;
  Description?: string;
  ProductTypeCode?: string;
  ProductType?: string;
  Followers?: string;
  ActivatedMaterial?: string;
  BarCode?: string;
  RegistrationNumber?: string;
  DosageForm?: string;
  PharmacologicalType?: string;
  RegisterType?: string;
  BodyOrgan?: string;
  OtherType?: string;
  CreaterID?: number;
  TimeCreate?: string;
  LinkImage?: string;
  LinkImageKM?: string;
  Packing?: string;
  Title?: string;
  Meta?: string;
  GCode?: string;
  GLevel1?: string;
  GLevel2?: string;
  GLevel3?: string;
  IsHot?: number;
  CustomerID?: number;
  CustomerName?: string;
  ProductDoseLst?: Record<string, any>[];
  ProductContraindicatedLst?: Record<string, any>[];
  ProductPackageLst?: Record<string, any>[];
  ProductRelationshipLst?: Record<string, any>[];
  ProductActivatedLst?: Record<string, any>[];
  ImageMoreLst?: Record<string, any>[];
  Status?: number;
}

export interface NTPromoHeaderInfo {
  RowID?: number;
  DocumentID?: string;
  PromoName?: string;
  TimeStart?: string;
  TimeEnd?: string;
  Description?: string;
  Note?: string;
  Status?: number;
  TimeCreate?: string;
  CreateID?: number;
  ModifyID?: number;
  TimeModify?: string;
  PromoType?: number;
  AutoRenew?: boolean;
  QuantityAchieved?: number;
  PromoLineLst?: Record<string, any>[];
  PromoAchievedLst?: Record<string, any>[];
}

export interface NTRejectOrderOnlineReq {
  uPharmaID?: number;
  Token?: string;
  OrderID?: string;
  Note?: string;
}

export interface NTRejectOrderOnlineRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTRenameSupplierFileReq {
  uPharmaID?: number;
  Token?: string;
  FileID?: number;
  FileName?: string;
  FileType?: string;
  ExpirationDate?: string;
  Note?: string;
}

export interface NTRenameSupplierFileRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTReturnShopInfo {
  RowID?: number;
  DocumentID?: string;
  ShopCode?: string;
  ShopName?: string;
  CustomerPhone?: string;
  CustomerName?: string;
  ReferentCode?: string;
  TimeCreate?: string;
  CreateID?: number;
  ModifyID?: number;
  TimeModify?: string;
  ApproveID?: number;
  TimeApprove?: string;
  Status?: number;
  PostingDate?: string;
  Note?: string;
  Amount?: number;
  Image?: string;
  ReturnShopLotLst?: Record<string, any>[];
  LotCodeNewLst?: Record<string, any>[];
}

export interface NTReturnStoreInfo {
  RowID?: number;
  DocumentID?: string;
  ReceiverCode?: string;
  ReceiverName?: string;
  ReceiverAddress?: string;
  CreatorID?: number;
  TimeCreater?: string;
  CreatorNote?: string;
  ApproverID?: number;
  ApproverNote?: string;
  TimeApprove?: string;
  SenderCode?: string;
  SenderName?: string;
  Status?: number;
  TimeModify?: string;
  ModifyId?: number;
  TotalAmount?: number;
  EmployeeName?: string;
  EmployeeCode?: string;
  OrderId?: string;
  ReturnStoreLineLst?: Record<string, any>[];
  ReturnStoreLotLst?: Record<string, any>[];
}

export interface NTReturnStoreLineInfo {
  RowID?: number;
  DocumentID?: string;
  ProductId?: string;
  ProductName?: string;
  UnitOfMeasure?: string;
  LotCode?: string;
  ExpirationDate?: string;
  ProductionDate?: string;
  Quantity?: number;
  UnitPrice?: number;
  Status?: number;
  Note?: string;
  Promotion?: string;
  ApproverId?: number;
  ApproveTime?: string;
  ApproveNote?: string;
  Discount?: number;
  VAT?: number;
  BasePrice?: number;
  Amount?: number;
  TotalAmount?: number;
  AmountVAT?: number;
  AmountDiscount?: number;
  StoreType?: string;
  PackageID?: number;
  PackageStamp?: number;
  UnitOfSales?: string;
}

export interface NTReturnStoreLotInfo {
  RowID?: number;
  ProductID?: string;
  DocumentID?: string;
  LotCode?: string;
  LotCodeIndex?: string;
  TimeCreate?: string;
  CreaterID?: number;
  LableName?: string;
  ProductName?: string;
  UnitOfMeasure?: string;
  UnitPrice?: number;
  Genuine?: number;
  QuantityUnit?: number;
  QuantityExist?: number;
  StoreType?: string;
  PackageID?: number;
  PackageStampID?: number;
  UnitOfStamp?: string;
}

export interface NTSalesHeaderInfo {
  RowID?: number;
  HeaderID?: string;
  ReferentCode?: string;
  TimeSystem?: string;
  SalesID?: number;
  SalesCode?: string;
  SalesName?: string;
  InvoiceType?: number;
  CustomerName?: string;
  CustomerContact?: string;
  CustomerAddress?: string;
  CustomerAge?: number;
  CustomerWeight?: number;
  CustomerDes?: string;
  CustomerImage?: string;
  CustomerSex?: string;
  CustomerDiagnose?: string;
  CustomerPay?: number;
  LinkImage?: string;
  Email?: string;
  NoteSales?: string;
  Invoice?: number;
  ShopCode?: string;
  ShopName?: string;
  OrderDate?: string;
  Ship?: number;
  SalesType?: string;
  ExpirationDate?: string;
  UserOrderID?: string;
  UserOrderName?: string;
  OrderDocumentID?: string;
  IntroduceID?: number;
  IntroduceName?: string;
  QRCode?: string;
  ShopAdvise?: string;
  DDTL?: number;
  PostingDate?: string;
  AmountIncludingVAT?: number;
  AmountIncludingAdjust?: number;
  QuantityProduct?: number;
  Status?: number;
  PromoDocID?: string;
  PromoName?: string;
  VNPayNote?: string;
  AccUp?: string;
  DMSID?: string;
  TimeUp?: string;
  DocumentSYTID?: string;
  TimeUploadSYT?: string;
  OnlineID?: string;
  ReasonType?: string;
  TimeCall?: string;
  IsReleased?: boolean;
  SalesLineLst?: Record<string, any>[];
  SuppLineLst?: Record<string, any>[];
  LotCodeOrderLst?: Record<string, any>[];
}

export interface NTSearchBuyerFamiliarReq {
  uPharmaID?: number;
  Token?: string;
  Search?: string;
  ShopCode?: string;
}

export interface NTSearchBuyerFamiliarRes {
  RespCode?: number;
  RespText?: string;
  BuyerLst?: Record<string, any>[];
}

export interface NTSearchBuyerReq {
  uPharmaID?: number;
  Token?: string;
  Search?: string;
}

export interface NTSearchBuyerRes {
  RespCode?: number;
  RespText?: string;
  BuyerLst?: Record<string, any>[];
}

export interface NTSearchEmployeeCPC1HNReq {
  uPharmaID?: number;
  Token?: string;
  Search?: string;
}

export interface NTSearchEmployeeCPC1HNRes {
  RespCode?: number;
  RespText?: string;
  EmployeeCPC1HNInfo?: any;
}

export interface NTSearchInvoiceImageReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  Search?: string;
}

export interface NTSearchInvoiceImageRes {
  RespCode?: number;
  RespText?: string;
  OrderHeaderLst?: Record<string, any>[];
}

export interface NTSearchSampleDiseaseReq {
  uPharmaID?: number;
  Token?: string;
  Search?: string;
}

export interface NTSearchSampleDiseaseRes {
  RespCode?: number;
  RespText?: string;
  SampleDiseaseLst?: Record<string, any>[];
}

export interface NTSentMailReportReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  DocumentID?: string;
  LackInfo?: string;
  SolutionLack?: string;
  ReportType?: string;
  Content?: string;
  Subject?: string;
  MailCC?: string;
  MailRecipent?: string;
  Kaizen?: string;
}

export interface NTSentMailReportRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTSetInventoryShopSafeReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  InventorySafeInfo?: any;
}

export interface NTSetInventoryShopSafeRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTSetInventorySystemSafeReq {
  uPharmaID?: number;
  Token?: string;
  StoreSafe?: string;
  InventorySafeInfo?: any;
}

export interface NTSetInventorySystemSafeRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTSetPriceSalesReq {
  uPharmaID?: number;
  Token?: string;
  PriceSalesLst?: Record<string, any>[];
}

export interface NTSetPriceSalesRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTSetUserOrganizationReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
  OrganizationID?: number;
  uPharmaCode?: number;
  DefineID?: number;
  Status?: number;
}

export interface NTSetUserOrganizationRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTStopTransferOrderLotReq {
  uPharmaID?: number;
  Token?: string;
  RowIDLst?: string;
  StopProcess?: number;
}

export interface NTStopTransferOrderLotRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTSupplierBankAccountInfo {
  RowID?: number;
  CustomerID?: number;
  BankName?: string;
  BankBranch?: string;
  BankAccount?: string;
  AccountName?: string;
  IsCompany?: number;
  FileAuthorize?: string;
  TimeCreate?: string;
  CreateID?: number;
  TimeModify?: string;
  ModifyID?: number;
  Status?: number;
}

export interface NTSupplierContactInfo {
  RowID?: number;
  CustomerID?: number;
  ContactName?: string;
  ContactPhone?: string;
  TimeCreate?: string;
  CreateID?: number;
  TimeModify?: string;
  ModifyID?: number;
  Status?: number;
}

export interface NTSupplierFileInfo {
  RowID?: number;
  CustomerID?: number;
  CustomerCode?: string;
  CustomerName?: string;
  CustomerType?: string;
  TypeOther?: string;
  FollowerName?: string;
  File_DKKDLimit?: string;
  File_DKKDName?: string;
  File_DKKDDate?: string;
  File_GDPLimit?: string;
  File_GDPName?: string;
  File_GDPDate?: string;
  File_DDKKDLimit?: string;
  File_DDKKDName?: string;
  File_DDKKDDate?: string;
  File_Other?: string;
  File_OtherName?: string;
  File_HDName?: string;
  File_HDDate?: string;
  TimeCreate?: string;
  CreateID?: number;
  DayCheck?: number;
  DayShip?: number;
  TimeModify?: string;
  ModifyID?: number;
  Status?: number;
  HD_TimeApply?: string;
  HD_Return?: string;
  HD_PaymentMethod?: string;
  HD_PaymentType?: string;
  HD_PaymentDay?: number;
  HD_DebtLimit?: number;
  HD_DebtDay?: number;
  HD_Support?: string;
  Email?: string;
  IsCommit?: number;
}

export interface NTSupplierInfo {
  CustomerID?: number;
  CustomerCode?: string;
  CustomerName?: string;
  CustomerAddress?: string;
  CustomerPhone?: string;
  TaxCode?: string;
  BankCode?: string;
  BankName?: string;
  BankAccount?: string;
  PaymentMethod?: string;
  Delegate?: string;
  Status?: number;
  TypeSupplier?: number;
  TypeOther?: string;
  IsFast?: number;
}

export interface NTSupplierPolicyInfo {
  RowID?: number;
  ProductID?: string;
  CustomerID?: number;
  Quantity?: number;
  PromoType?: string;
  ProductGiftName?: string;
  ProductGiftID?: string;
  Point?: number;
  Note?: string;
  TimeApply?: string;
  ExpirationDate?: string;
  TimeCreate?: string;
  CreateID?: number;
  CreateName?: string;
  TimeModify?: string;
  ModifyID?: number;
  Status?: number;
  Discount?: number;
  QuantityGift?: number;
}

export interface NTSupplierSurveyInfo {
  RowID?: number;
  ProductID?: string;
  CustomerID?: number;
  ChanelName?: string;
  UnitPrice?: number;
  UnitOfMeasure?: string;
  TimeCreate?: string;
  CreateID?: number;
  CreateName?: string;
  TimeModify?: string;
  ModifyID?: number;
  Status?: number;
}

export interface NTTransferOrderHeaderInfo {
  HeaderID?: string;
  City?: string;
  Center?: string;
  ShopCode?: string;
  ShopName?: string;
  CreateID?: number;
  EmployeeCode?: string;
  EmployeeName?: string;
  TimeCreate?: string;
  Note?: string;
  ApproverID?: number;
  ApproverCode?: string;
  ApproverName?: string;
  ApproverNote?: string;
  TimeApprove?: string;
  ReferenceCode?: string;
  Priority?: number;
  Status?: number;
  StoreDoc?: number;
  IsSupplies?: number;
  TransferID?: number;
  TransferName?: string;
  TimeTransfer?: string;
  Amount?: number;
  QuantityProduct?: number;
  SenderCode?: string;
  SenderName?: string;
  TransferOrderLineLst?: Record<string, any>[];
}

export interface NTTransferSuppHeaderInfo {
  RowID?: number;
  DocType?: number;
  DocumentID?: string;
  ReceiverCode?: string;
  ReceiverName?: string;
  ReceiverAddress?: string;
  CreatorID?: number;
  TimeCreater?: string;
  CreatorNote?: string;
  ApproverID?: number;
  ApproverNote?: string;
  TimeApprove?: string;
  SenderCode?: string;
  SenderName?: string;
  Status?: number;
  TimeModify?: string;
  ModifyId?: number;
  TotalAmount?: number;
  EmployeeName?: string;
  EmployeeCode?: string;
  OrderId?: string;
  TransferSuppLineLst?: Record<string, any>[];
}

export interface NTUpCancelProductFollowReq {
  uPharmaID?: number;
  Token?: string;
  CancelProductFollowLst?: Record<string, any>[];
  Status?: number;
  Note?: string;
}

export interface NTUpCancelProductFollowRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateBuyerFamiliarReq {
  uPharmaID?: number;
  Token?: string;
  CustomerPhone?: string;
  CustomerName?: string;
  Note?: string;
  IsDel?: number;
  ShopCode?: string;
}

export interface NTUpdateBuyerFamiliarRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateCancelProductReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  CancelProductInfo?: any;
}

export interface NTUpdateCancelProductRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateDocChangePackageIDReq {
  uPharmaID?: number;
  Token?: string;
  Note?: string;
  HeaderID?: string;
  LotCodeChangeLst?: Record<string, any>[];
}

export interface NTUpdateDocChangePackageIDRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateDocChangePriceReq {
  uPharmaID?: number;
  Token?: string;
  Note?: string;
  HeaderID?: string;
  LotCodeChangeLst?: Record<string, any>[];
}

export interface NTUpdateDocChangePriceRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateEmployeeInfoReq {
  uPharmaID?: number;
  Token?: string;
  EmployeeInfo?: any;
}

export interface NTUpdateEmployeeInfoRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateEmployeePlanReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  EmployeePlanInfo?: any;
}

export interface NTUpdateEmployeePlanRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateFeeShipReq {
  uPharmaID?: number;
  Token?: string;
  BoxID?: number;
  PartnerID?: string;
  PartnerName?: string;
  FeeShip?: number;
  Note?: string;
  CodeVD?: string;
}

export interface NTUpdateFeeShipRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateGShopReq {
  uPharmaID?: number;
  Token?: string;
  GShopID?: number;
  GShopName?: string;
  GShopLineLst?: Record<string, any>[];
}

export interface NTUpdateGShopRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateImportStoreReq {
  uPharmaID?: number;
  Token?: string;
  ImportStoreHeaderInfo?: any;
  ImportLotLineLst?: Record<string, any>[];
}

export interface NTUpdateImportStoreRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateImportSuppReq {
  uPharmaID?: number;
  Token?: string;
  ImportSuppHeaderInfo?: any;
}

export interface NTUpdateImportSuppRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateImportSysApproveReq {
  uPharmaID?: number;
  Token?: string;
  ImportSysHeaderInfo?: any;
}

export interface NTUpdateImportSysApproveRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateImportSysReq {
  uPharmaID?: number;
  Token?: string;
  ImportSysHeaderInfo?: any;
}

export interface NTUpdateImportSysRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateMessageReq {
  uPharmaID?: number;
  Token?: string;
  MessageInfo?: any;
}

export interface NTUpdateMessageRes {
  RespCode?: number;
  RespText?: string;
  MessageLst?: Record<string, any>[];
}

export interface NTUpdateNoteInvoiceReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
  Note?: string;
  CustomerDiagnose?: string;
  CustomerDes?: string;
}

export interface NTUpdateNoteInvoiceRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateNoteShelfReq {
  uPharmaID?: number;
  Token?: string;
  TypeLevel?: number;
  Center?: string;
  LevelCodeLst?: string;
  Note?: string;
}

export interface NTUpdateNoteShelfRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateOrderHeaderReq {
  uPharmaID?: number;
  Token?: string;
  VoucherGift?: string;
  VoucherUse?: string;
  VoucherPoint?: number;
  OrderHeaderInfo?: any;
  PromoAchieveLst?: Record<string, any>[];
}

export interface NTUpdateOrderHeaderRes {
  RespCode?: number;
  RespText?: string;
  HeaderID?: string;
  EmplyeeCode?: string;
  EmplyeeName?: string;
  QRCode?: string;
  Hotline?: string;
  OrderHeaderInfo?: any;
}

export interface NTUpdateOrderProductNewReq {
  uPharmaID?: number;
  Token?: string;
  OrderProductNewInfo?: any;
}

export interface NTUpdateOrderProductNewRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateOrganizationDetailReq {
  uPharmaID?: number;
  Token?: string;
  OrganizationDetailInfo?: any;
}

export interface NTUpdateOrganizationDetailRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateOrganizationReq {
  uPharmaID?: number;
  Token?: string;
  OrganizationInfo?: any;
}

export interface NTUpdateOrganizationRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateOrganizationTempReq {
  uPharmaID?: number;
  Token?: string;
  OrganizationTempInfo?: any;
}

export interface NTUpdateOrganizationTempRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdatePackageDefaultReq {
  uPharmaID?: number;
  Token?: string;
  PackageID?: number;
  PackageType?: number;
}

export interface NTUpdatePackageDefaultRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdatePointSalesDefineReq {
  uPharmaID?: number;
  Token?: string;
  PointSalesDefineLst?: Record<string, any>[];
}

export interface NTUpdatePointSalesDefineRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdatePointSalesMoreReq {
  uPharmaID?: number;
  Token?: string;
  PointSalesMoreLst?: Record<string, any>[];
}

export interface NTUpdatePointSalesMoreRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdatePriceOrderReq {
  uPharmaID?: number;
  Token?: string;
  PriceOrderInfo?: any;
}

export interface NTUpdatePriceOrderRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateProductContraindicatedReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
  ProductContraindicatedLst?: Record<string, any>[];
}

export interface NTUpdateProductContraindicatedRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateProductDoseReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
  ProductDoseLst?: Record<string, any>[];
}

export interface NTUpdateProductDoseRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateProductInfoReq {
  uPharmaID?: number;
  Token?: string;
  ProductInfo?: any;
}

export interface NTUpdateProductInfoRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateProductPackageReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
  ProductPackageLst?: Record<string, any>[];
}

export interface NTUpdateProductPackageRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateProductRelationshipReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
  ProductRelationshipLst?: Record<string, any>[];
}

export interface NTUpdateProductRelationshipRes {
  RespCode?: number;
  RespText?: string;
  ProductRelationshipLst?: Record<string, any>[];
}

export interface NTUpdateProductSupplierReq {
  uPharmaID?: number;
  Token?: string;
  CustomerID?: number;
  ProductID?: string;
  QuantityCommit?: number;
  TimeCommit?: number;
  MonthSafe?: number;
}

export interface NTUpdateProductSupplierRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateProductUnitPrintReq {
  uPharmaID?: number;
  Token?: string;
  PackageID?: number;
}

export interface NTUpdateProductUnitPrintRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateProductWarningReq {
  uPharmaID?: number;
  Token?: string;
  ProductWarningLst?: Record<string, any>[];
}

export interface NTUpdateProductWarningRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdatePromoHeaderReq {
  uPharmaID?: number;
  Token?: string;
  PromoHeaderInfo?: any;
}

export interface NTUpdatePromoHeaderRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdatePromoShopReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
  PromoShopLst?: Record<string, any>[];
}

export interface NTUpdatePromoShopRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateReturnDocReq {
  uPharmaID?: number;
  Token?: string;
  ReturnStoreInfo?: any;
}

export interface NTUpdateReturnDocRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateStoreFollowLstReq {
  uPharmaID?: number;
  Token?: string;
  EmployeeID?: number;
  ShopCodeLst?: string;
}

export interface NTUpdateStoreFollowLstRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateSttOrderHeaderReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
  Status?: number;
}

export interface NTUpdateSttOrderHeaderRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateSttVoucherReq {
  uPharmaID?: number;
  Token?: string;
  VoucherID?: string;
  Status?: number;
}

export interface NTUpdateSttVoucherRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateSupplierFileReq {
  uPharmaID?: number;
  Token?: string;
  SupplierFileInfo?: any;
}

export interface NTUpdateSupplierFileRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateSupplierReq {
  uPharmaID?: number;
  Token?: string;
  SupplierInfo?: any;
}

export interface NTUpdateSupplierRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateTransferOrderCenterReq {
  uPharmaID?: number;
  Token?: string;
  TransferOrderHeaderInfo?: any;
}

export interface NTUpdateTransferOrderCenterRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateTransferOrderFirstReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  ProductID?: string;
  Quantity?: number;
}

export interface NTUpdateTransferOrderFirstRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateTransferOrderLotReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
  ProductID?: string;
  Center?: string;
  TransferOrderLotLst?: Record<string, any>[];
  TransferOrderLine?: Record<string, any>[];
}

export interface NTUpdateTransferOrderLotRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateTransferOrderLotV2Req {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
  ProductID?: string;
  Center?: string;
  StopProcess?: number;
  ApproveNote?: string;
  TransferOrderLotLst?: Record<string, any>[];
}

export interface NTUpdateTransferOrderReq {
  uPharmaID?: number;
  Token?: string;
  TransferOrderHeaderInfo?: any;
}

export interface NTUpdateTransferOrderRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateTransferSuppReq {
  uPharmaID?: number;
  Token?: string;
  TransferSuppHeaderInfo?: any;
}

export interface NTUpdateTransferSuppRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateTypeInvoiceReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
  SalesType?: number;
  Ship?: number;
}

export interface NTUpdateTypeInvoiceRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateUserInfoReq {
  uPharmaID?: number;
  Token?: string;
  UserInfo?: any;
}

export interface NTUpdateUserInfoRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUpdateVNPayInvoiceReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
  VNPayNote?: string;
}

export interface NTUpdateVNPayInvoiceRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTUploadFileRes {
  RespText?: string;
  RespCode?: number;
  FileName?: string;
}

export interface NTUploadImageDesRes {
  location?: string;
  error?: string;
}

export interface NTUserInfo {
  uPharmaID?: number;
  PhoneNumber?: string;
  Email?: string;
  FullName?: string;
  Sex?: string;
  Address?: string;
  Birthday?: string;
  UTypeTxt?: string;
  UType?: number;
  ShopLst?: Record<string, any>[];
  GroupLst?: Record<string, any>[];
  StoreLst?: Record<string, any>[];
}

export interface NTUserLoginReq {
  UserName?: string;
  Password?: string;
  TypeDevice?: number;
}

export interface NTUserLoginRes {
  RespCode?: number;
  RespText?: string;
  Token?: string;
  UserInfo?: any;
}

export interface NTUserRegisterReq {
  Email?: string;
  PhoneNumber?: string;
  FullName?: string;
  Address?: string;
  Sex?: string;
}

export interface NTUserRegisterRes {
  RespCode?: number;
  RespText?: string;
}

export interface NTVNPayIPNReq {
  merchantMethodCode?: string;
  methodCode?: string;
  partnerCode?: string;
  merchantCode?: string;
  orderCode?: string;
  amount?: number;
  realAmount?: number;
  totalPaid?: number;
  clientTransactionCode?: string;
  transactionCode?: string;
  responseCode?: string;
  responseMessage?: string;
  partnerTransactionCode?: string;
  bankCode?: string;
  installmentTerm?: number;
  voucherCode?: string;
  approveCode?: string;
  cardNumberFirst6Digits?: string;
  cardNumberLast4Digits?: string;
  cashierId?: string;
  checksum?: string;
}

export interface NTVNPayIPNRes {
  code?: string;
  message?: string;
  traceId?: string;
}

export interface RPGetCustomerNewLstReq {
  uPharmaID?: number;
  Token?: string;
  Month?: number;
  Year?: number;
  ShopCode?: string;
}

export interface RPGetCustomerNewLstRes {
  RespCode?: number;
  RespText?: string;
  CustomerNewLst?: Record<string, any>[];
}

export interface RPGetDataCancelProductByTimeReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface RPGetDataCancelProductByTimeRes {
  RespCode?: number;
  RespText?: string;
  DataCancelProductLst?: Record<string, any>[];
}

export interface RPGetDataLotImportReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface RPGetDataLotImportRes {
  RespCode?: number;
  RespText?: string;
  DataLotImportLst?: Record<string, any>[];
}

export interface RPGetDataProductImportReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface RPGetDataProductImportRes {
  RespCode?: number;
  RespText?: string;
  DataProductImportLst?: Record<string, any>[];
}

export interface RPGetDataProductReturnReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface RPGetDataProductReturnRes {
  RespCode?: number;
  RespText?: string;
  DataProductTransferLst?: Record<string, any>[];
}

export interface RPGetDataProductSalesReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface RPGetDataProductSalesRes {
  RespCode?: number;
  RespText?: string;
  DataProductSalesLst?: Record<string, any>[];
}

export interface RPGetDataProductTransferReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface RPGetDataProductTransferRes {
  RespCode?: number;
  RespText?: string;
  DataProductTransferLst?: Record<string, any>[];
}

export interface RPGetDataReturnShopByTimeReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface RPGetDataReturnShopByTimeRes {
  RespCode?: number;
  RespText?: string;
  DataReturnShopLst?: Record<string, any>[];
}

export interface RPGetDataSuppliesImportReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface RPGetDataSuppliesImportRes {
  RespCode?: number;
  RespText?: string;
  DataProductImportLst?: Record<string, any>[];
}

export interface RPGetDeliverySpeedLstReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface RPGetDeliverySpeedLstRes {
  RespCode?: number;
  RespText?: string;
  DeliverySpeedLst?: Record<string, any>[];
}

export interface RPGetImportNearExpirationReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
}

export interface RPGetImportNearExpirationRes {
  RespCode?: number;
  RespText?: string;
  ImportNearExpLst?: Record<string, any>[];
}

export interface RPGetReportGeneralByTypeReq {
  uPharmaID?: number;
  Token?: string;
  TypeName?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface RPGetReportGeneralByTypeRes {
  RespCode?: number;
  RespText?: string;
  JsonData?: Record<string, any>[];
  ColFieldLst?: Record<string, any>[];
  ColTypeLst?: Record<string, any>[];
  ColNameLst?: Record<string, any>[];
}

export interface RPGetRewardNearExpirationLstReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface RPGetRewardNearExpirationLstRes {
  RespCode?: number;
  RespText?: string;
  SalesNearExpirationLst?: Record<string, any>[];
}

export interface RPGetSuggestTransferOrderLstReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
  ProductID?: string;
  Center?: string;
}

export interface RPGetSuggestTransferOrderLstRes {
  RespCode?: number;
  RespText?: string;
  SuggestTransferOrderLst?: Record<string, any>[];
}

export interface RPGetTotalPriceShopLstReq {
  uPharmaID?: number;
  Token?: string;
}

export interface RPGetTotalPriceShopLstRes {
  RespCode?: number;
  RespText?: string;
  TotalPriceShopLst?: Record<string, any>[];
}

export interface RPGetTransferOrderByFollowerDReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
  Center?: string;
}

export interface RPGetTransferOrderByFollowerDRes {
  RespCode?: number;
  RespText?: string;
  TransferOrderFollowerDLst?: Record<string, any>[];
}

export interface RPGetTransferOrderByFollowerReq {
  uPharmaID?: number;
  Token?: string;
}

export interface RPGetTransferOrderByFollowerRes {
  RespCode?: number;
  RespText?: string;
  TransferOrderFollowerLst?: Record<string, any>[];
}

export interface SYTCreateImportStoreDocReq {
  uPharmaID?: number;
  Token?: string;
  ImportStoreDocInfo?: any;
}

export interface SYTCreateImportStoreDocRes {
  RespCode?: number;
  RespText?: string;
}

export interface SYTDelImportHeaderReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
}

export interface SYTDelImportHeaderRes {
  RespCode?: number;
  RespText?: string;
}

export interface SYTDelImportStoreDocReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface SYTDelImportStoreDocRes {
  RespCode?: number;
  RespText?: string;
}

export interface SYTDelSalesInvoiceReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
}

export interface SYTDelSalesInvoiceRes {
  RespCode?: number;
  RespText?: string;
}

export interface SYTDisconnectImportStoreDocReq {
  uPharmaID?: number;
  Token?: string;
  HeaderID?: string;
}

export interface SYTDisconnectImportStoreDocRes {
  RespCode?: number;
  RespText?: string;
}

export interface SYTGetImportStoreDocByIDReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface SYTGetImportStoreDocByIDRes {
  RespCode?: number;
  RespText?: string;
  ImportStoreDocInfo?: any;
}

export interface SYTGetImportStoreDocByTimeReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
  ShopCode?: string;
}

export interface SYTGetImportStoreDocByTimeRes {
  RespCode?: number;
  RespText?: string;
  ImportStoreDocLst?: Record<string, any>[];
}

export interface SYTGetInventoryByShopReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
}

export interface SYTGetInventoryByShopRes {
  RespCode?: number;
  RespText?: string;
  InventoryShopLst?: Record<string, any>[];
}

export interface SYTGetItemLstReq {
  uPharmaID?: number;
  Token?: string;
}

export interface SYTGetItemLstRes {
  RespCode?: number;
  RespText?: string;
  ProductLst?: Record<string, any>[];
}

export interface SYTGetSalesLineByTimeReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
  ShopCode?: string;
}

export interface SYTGetSalesLineByTimeRes {
  RespCode?: number;
  RespText?: string;
  ImportStoreLineLst?: Record<string, any>[];
}

export interface SYTImportStoreDocInfo {
  RowID?: number;
  DocumentID?: string;
  CreateID?: number;
  TimeCreate?: string;
  CreateNote?: string;
  TimeModify?: string;
  ModifyId?: number;
  ApproverID?: number;
  TimeApprove?: string;
  Status?: number;
  PostingDate?: string;
  TypeDoc?: number;
  TypeImport?: number;
  Supplier?: string;
  ShopCode?: string;
  ShopName?: string;
  DocumentSYTID?: string;
  TimeUpload?: string;
  ImportStoreLineLst?: Record<string, any>[];
}

export interface SYTInvoiceDQGInfo {
  error?: string;
  ma_don_thuoc?: string;
  ho_ten_benh_nhan?: string;
  ngay_sinh_benh_nha?: string;
  thong_tin_nguoi_giam_ho?: string;
  loai_don_thuoc?: string;
  hinh_thuc_dieu_tri?: string;
  dia_chi?: string;
  gioi_tinh?: string;
  can_nang?: string;
  ma_so_the_bao_hiem_y_te?: string;
  ma_dinh_danh_y_te?: string;
  luu_y?: string;
  loi_dan?: string;
  ten_bac_si?: string;
  ten_co_so_kham_chua_benh?: string;
  ma_bao_hiem_co_so_kham_chua_benh?: string;
  so_dien_thoai_co_so_kham_chua_benh?: string;
  so_dien_thoai_nguoi_kham_benh?: string;
  don_cap_phat_thuoc?: number;
  ngay_gio_ke_don?: string;
  thong_tin_don_thuoc?: Record<string, any>[];
  chan_doan?: Record<string, any>[];
}

export interface SYTSearchInvoiceDQGReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface SYTSearchInvoiceDQGRes {
  RespCode?: number;
  RespText?: string;
  InvoiceDQGInfo?: any;
}

export interface SYTUpInvoiceDQGReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
  ShopCode?: string;
  InvoiceID?: string;
  InvoiceDQGLineLst?: Record<string, any>[];
}

export interface SYTUpInvoiceDQGRes {
  RespCode?: number;
  RespText?: string;
}

export interface SYTUpdateImportStoreDocReq {
  uPharmaID?: number;
  Token?: string;
  ImportStoreDocInfo?: any;
}

export interface SYTUpdateImportStoreDocRes {
  RespCode?: number;
  RespText?: string;
}

export interface SYTUploadImportHeaderReq {
  uPharmaID?: number;
  Token?: string;
  ImportStoreHeaderInfo?: any;
}

export interface SYTUploadImportHeaderRes {
  RespCode?: number;
  RespText?: string;
  DocumentSYTID?: string;
}

export interface SYTUploadImportStoreDocReq {
  uPharmaID?: number;
  Token?: string;
  ImportStoreDocInfo?: any;
}

export interface SYTUploadImportStoreDocRes {
  RespCode?: number;
  RespText?: string;
  DocumentSYTID?: string;
}

export interface SYTUploadSalesInvoiceReq {
  uPharmaID?: number;
  Token?: string;
  SalesHeaderInfo?: any;
}

export interface SYTUploadSalesInvoiceRes {
  RespCode?: number;
  RespText?: string;
  DocumentSYTID?: string;
}

export interface SysApproveTransferCenterLineReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
  RowIDLst?: string;
}

export interface SysApproveTransferCenterLineRes {
  RespCode?: number;
  RespText?: string;
  StatusHeader?: number;
}

export interface SysApproveTransferCenterReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
  Note?: string;
}

export interface SysApproveTransferCenterRes {
  RespCode?: number;
  RespText?: string;
}

export interface SysCreateTransferCenterReq {
  uPharmaID?: number;
  Token?: string;
  TransferCenterInfo?: any;
  OrderRowLineLst?: string;
}

export interface SysCreateTransferCenterRes {
  RespCode?: number;
  RespText?: string;
}

export interface SysDelTransferCenterReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface SysDelTransferCenterRes {
  RespCode?: number;
  RespText?: string;
}

export interface SysGetLotCodeExistByLotIndexReq {
  uPharmaID?: number;
  Token?: string;
  LotCodeIndex?: string;
  Center?: string;
}

export interface SysGetLotCodeExistByLotIndexRes {
  RespCode?: number;
  RespText?: string;
  LotCodeTransferCenterInfo?: any;
}

export interface SysGetTransferCenterByIDReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface SysGetTransferCenterByIDRes {
  RespCode?: number;
  RespText?: string;
  TransferCenterInfo?: any;
}

export interface SysGetTransferCenterByTimeReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface SysGetTransferCenterByTimeRes {
  RespCode?: number;
  RespText?: string;
  TransferCenterLst?: Record<string, any>[];
}

export interface SysLotCodeTransferCenterInfo {
  ProductID?: string;
  LotCode?: string;
  DocumentID?: string;
  ProductName?: string;
  UnitPrice?: number;
  LotCodeIndex?: string;
  UnitOfMeasure?: string;
  Genuine?: string;
  QuantityUnit?: number;
  PackageID?: number;
  PackageStampID?: number;
  UnitOfStamp?: string;
  VAT?: number;
  QuantityExist?: number;
  Status?: number;
  ReferenceID?: number;
}

export interface SysTransferCenterInfo {
  DocumentID?: string;
  CreateID?: number;
  TimeCreate?: string;
  CreateName?: string;
  Status?: number;
  FromLocationCode?: string;
  FromLocationName?: string;
  ToLocationCode?: string;
  ToLocationName?: string;
  Note?: string;
  TimeApprove?: string;
  ApproveName?: string;
  ApproveID?: number;
  TimeSave?: string;
  SaveName?: string;
  SaveID?: number;
  OrderID?: string;
  FeeShip?: number;
  NoteShip?: string;
  CreateShipID?: number;
  TimeShip?: string;
  QuantityBox?: number;
  PackingID?: number;
  PackingName?: string;
  TimePacking?: string;
  PackingNote?: string;
  LotCodeTransferCenterLst?: Record<string, any>[];
  TransferCenterLineLst?: Record<string, any>[];
}

export interface SysUpdateTransferCenterReq {
  uPharmaID?: number;
  Token?: string;
  TransferCenterInfo?: any;
}

export interface SysUpdateTransferCenterRes {
  RespCode?: number;
  RespText?: string;
}

export interface TKGetStatisticsShopReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  TimeStart?: string;
  TimeEnd?: string;
}

export interface TKGetStatisticsShopRes {
  RespCode?: number;
  RespText?: string;
  PaymentMethodInfo?: any;
  TopProductSalesLst?: Record<string, any>[];
  SalesDayLst?: Record<string, any>[];
  CustomerSalesLst?: Record<string, any>[];
  RateCustomerInfo?: any;
  TakeCareCustomerLst?: Record<string, any>[];
}

export interface TKPaymentMethodInfo {
  Cash?: number;
  Card?: number;
  VNPay?: number;
  CK?: number;
}

export interface TKRateCustomerInfo {
  RateName?: number;
  RatePhone?: number;
  RateAddress?: number;
  RateAge?: number;
  RateDiagnose?: number;
}

export interface TOOLApproveCancelHeaderReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface TOOLApproveCancelHeaderRes {
  RespCode?: number;
  RespText?: string;
}

export interface TOOLApproveImportStoreReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface TOOLApproveImportStoreRes {
  RespCode?: number;
  RespText?: string;
}

export interface TOOLApproveImportSysHeaderReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface TOOLApproveImportSysHeaderRes {
  RespCode?: number;
  RespText?: string;
}

export interface TOOLCancelHeaderInfo {
  RowID?: number;
  DocumentID?: string;
  ShopCode?: string;
  ShopName?: string;
  CreateID?: number;
  CreateName?: string;
  TimeCreate?: string;
  ModifyID?: number;
  ModifyName?: string;
  TimeModify?: string;
  ApproveID?: number;
  ApproveName?: string;
  TimeApprove?: string;
  Status?: number;
  Note?: string;
  LotCodeLst?: Record<string, any>[];
}

export interface TOOLCreateCancelHeaderReq {
  uPharmaID?: number;
  Token?: string;
  CancelHeaderInfo?: any;
}

export interface TOOLCreateCancelHeaderRes {
  RespCode?: number;
  RespText?: string;
}

export interface TOOLCreateImportStoreReq {
  uPharmaID?: number;
  Token?: string;
  ImportStoreInfo?: any;
}

export interface TOOLCreateImportStoreRes {
  RespCode?: number;
  RespText?: string;
}

export interface TOOLCreateImportSysHeaderReq {
  uPharmaID?: number;
  Token?: string;
  ImportSysHeaderInfo?: any;
}

export interface TOOLCreateImportSysHeaderRes {
  RespCode?: number;
  RespText?: string;
}

export interface TOOLCreateProductReq {
  uPharmaID?: number;
  Token?: string;
  ProductInfo?: any;
}

export interface TOOLCreateProductRes {
  RespCode?: number;
  RespText?: string;
}

export interface TOOLDelCancelHeaderReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface TOOLDelCancelHeaderRes {
  RespCode?: number;
  RespText?: string;
}

export interface TOOLDelImportStoreReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface TOOLDelImportStoreRes {
  RespCode?: number;
  RespText?: string;
}

export interface TOOLDelImportSysHeaderReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface TOOLDelImportSysHeaderRes {
  RespCode?: number;
  RespText?: string;
}

export interface TOOLDelProductReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
}

export interface TOOLDelProductRes {
  RespCode?: number;
  RespText?: string;
}

export interface TOOLGetCancelHeaderByIDReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface TOOLGetCancelHeaderByIDRes {
  RespCode?: number;
  RespText?: string;
  CancelHeaderInfo?: any;
}

export interface TOOLGetCancelHeaderLstReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
  ShopCode?: string;
}

export interface TOOLGetCancelHeaderLstRes {
  RespCode?: number;
  RespText?: string;
  CancelHeaderLst?: Record<string, any>[];
}

export interface TOOLGetImportStoreByIDReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface TOOLGetImportStoreByIDRes {
  RespCode?: number;
  RespText?: string;
  ImportStoreInfo?: any;
}

export interface TOOLGetImportStoreLstReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
  ShopCode?: string;
}

export interface TOOLGetImportStoreLstRes {
  RespCode?: number;
  RespText?: string;
  ImportStoreLst?: Record<string, any>[];
}

export interface TOOLGetImportSysHeaderByIDReq {
  uPharmaID?: number;
  Token?: string;
  DocumentID?: string;
}

export interface TOOLGetImportSysHeaderByIDRes {
  RespCode?: number;
  RespText?: string;
  ImportSysHeaderInfo?: any;
}

export interface TOOLGetImportSysHeaderLstReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
  ShopCode?: string;
}

export interface TOOLGetImportSysHeaderLstRes {
  RespCode?: number;
  RespText?: string;
  ImportSysHeaderLst?: Record<string, any>[];
}

export interface TOOLGetInventoryByStoreReq {
  uPharmaID?: number;
  Token?: string;
  StoreLst?: string;
  IsCenter?: number;
}

export interface TOOLGetInventoryByStoreRes {
  RespCode?: number;
  RespText?: string;
  LineLst?: Record<string, any>[];
}

export interface TOOLGetInventoryDetailByPIDReq {
  uPharmaID?: number;
  Token?: string;
  ProductID?: string;
  ShopCode?: string;
}

export interface TOOLGetInventoryDetailByPIDRes {
  RespCode?: number;
  RespText?: string;
  LotLst?: Record<string, any>[];
}

export interface TOOLGetLotCodeIndexReq {
  uPharmaID?: number;
  Token?: string;
  LotCodeIndex?: string;
  ShopCode?: string;
}

export interface TOOLGetLotCodeIndexRes {
  RespCode?: number;
  RespText?: string;
  LotCodeInfo?: any;
}

export interface TOOLGetProductLstReq {
  uPharmaID?: number;
  Token?: string;
}

export interface TOOLGetProductLstRes {
  RespCode?: number;
  RespText?: string;
  ProductLst?: Record<string, any>[];
}

export interface TOOLImportStoreInfo {
  RowID?: number;
  DocumentID?: string;
  SenderCode?: string;
  SenderName?: string;
  ReceiverCode?: string;
  ReceiverName?: string;
  CreatorID?: number;
  CreatorName?: string;
  CreateNote?: string;
  TimeCreate?: string;
  ApproverID?: number;
  ApproverName?: string;
  Status?: number;
  TimeApprove?: string;
  ApproveNote?: string;
  TimeModify?: string;
  ModifyId?: number;
  ModifyName?: string;
  TimeFast?: string;
  TypeDoc?: number;
  LotCodeLst?: Record<string, any>[];
}

export interface TOOLImportSysHeaderInfo {
  RowID?: number;
  DocumentID?: string;
  CustomerName?: string;
  Note?: string;
  CreateID?: number;
  CreateName?: string;
  TimeCreate?: string;
  ModifyID?: number;
  TimeModify?: string;
  ModifyName?: string;
  Status?: number;
  TimeApprove?: string;
  ApproveID?: number;
  ApproveName?: string;
  Center?: string;
  ImportSysLineLst?: Record<string, any>[];
  LotCodeLst?: Record<string, any>[];
}

export interface TOOLLotCodeInfo {
  RowID?: number;
  IndexCode?: number;
  DocumentID?: string;
  LotCodeIndex?: string;
  LotCodeIndexFast?: string;
  ProductID?: string;
  ProductName?: string;
  UnitOfMeasure?: string;
  ReferentCode?: string;
  TimeReferent?: string;
  TimeCreate?: string;
  Status?: number;
  CreateID?: number;
  Center?: string;
  ToLocationCode?: string;
  FromLocationCode?: string;
  Description?: string;
}

export interface TOOLProductInfo {
  ProductID?: string;
  ProductName?: string;
  UnitOfMeasure?: string;
  TimeCreate?: string;
  CreateID?: number;
}

export interface TOOLUpLotCodeIndexFastReq {
  uPharmaID?: number;
  Token?: string;
  LotCodeIndex?: string;
  LotCodeIndexFAST?: string;
  Description?: string;
}

export interface TOOLUpLotCodeIndexFastRes {
  RespCode?: number;
  RespText?: string;
}

export interface TOOLUpdateCancelHeaderReq {
  uPharmaID?: number;
  Token?: string;
  CancelHeaderInfo?: any;
}

export interface TOOLUpdateCancelHeaderRes {
  RespCode?: number;
  RespText?: string;
}

export interface TOOLUpdateImportStoreReq {
  uPharmaID?: number;
  Token?: string;
  ImportStoreInfo?: any;
}

export interface TOOLUpdateImportStoreRes {
  RespCode?: number;
  RespText?: string;
}

export interface TOOLUpdateImportSysHeaderReq {
  uPharmaID?: number;
  Token?: string;
  ImportSysHeaderInfo?: any;
}

export interface TOOLUpdateImportSysHeaderRes {
  RespCode?: number;
  RespText?: string;
}

export interface TOOLUpdateProductReq {
  uPharmaID?: number;
  Token?: string;
  ProductInfo?: any;
}

export interface TOOLUpdateProductRes {
  RespCode?: number;
  RespText?: string;
}

export interface UPApproveShopPlanReq {
  uPharmaID?: number;
  Token?: string;
  RowID?: number;
  Status?: number;
  Note?: string;
}

export interface UPApproveShopPlanRes {
  RespCode?: number;
  RespText?: string;
}

export interface UPGetShopPlanByTimeReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
  ShopCode?: string;
}

export interface UPGetShopPlanByTimeRes {
  RespCode?: number;
  RespText?: string;
  ShopPlanLst?: Record<string, any>[];
}

export interface UPShopPlanInfo {
  RowID?: number;
  ShopCode?: string;
  Month?: string;
  TimeCreate?: string;
  CreateID?: number;
  TimeModify?: string;
  ModifyID?: number;
  ApproveID?: number;
  TimeApprove?: string;
  ApproveName?: string;
  ApproveID2?: number;
  TimeApprove2?: string;
  ApproveName2?: string;
  Amount?: number;
  PointSales01?: number;
  QuaCustomer?: number;
  QuaCustomerNew?: number;
  QuaCustomerOld?: number;
  QuaInvoice?: number;
  SKU?: number;
  RatioSlowSales?: number;
  AmountR?: number;
  PointSales01R?: number;
  QuaCustomerR?: number;
  QuaCustomerNewR?: number;
  QuaCustomerOldR?: number;
  QuaInvoiceR?: number;
  SKUR?: number;
  RatioSlowSalesR?: number;
  QuantityHHS?: number;
  CusLevel1?: number;
  CusLevel2?: number;
  CusLevel3?: number;
  CusLevel4?: number;
  CusLevel5?: number;
  CusLevel6?: number;
  CusLevel1R?: number;
  CusLevel2R?: number;
  CusLevel3R?: number;
  CusLevel4R?: number;
  CusLevel5R?: number;
  CusLevel6R?: number;
  Note?: string;
  Status?: number;
  InvoiceKD?: number;
  ImageKD?: number;
}

export interface UPUpdateShopPlanReq {
  uPharmaID?: number;
  Token?: string;
  ShopPlanInfo?: any;
}

export interface UPUpdateShopPlanRes {
  RespCode?: number;
  RespText?: string;
}

export interface VNPCheckCompleteQRPaymentReq {
  uPharmaID?: number;
  Token?: string;
  ClientTransactionCode?: string;
}

export interface VNPCheckCompleteQRPaymentRes {
  RespCode?: number;
  RespText?: string;
}

export interface VNPCreateCardPaymentReq {
  uPharmaID?: number;
  Token?: string;
  ShopCode?: string;
  Amount?: number;
  QRSocket?: string;
}

export interface VNPCreateCardPaymentRes {
  RespCode?: number;
  RespText?: string;
  ClientTransactionCode?: string;
}

export interface VNPCreateQRPaymentReq {
  uPharmaID?: number;
  Token?: string;
  QrWidth?: number;
  QrHeight?: number;
  QrType?: number;
  HeaderID?: string;
  ShopCode?: string;
  Amount?: number;
  QRSocket?: string;
}

export interface VNPCreateQRPaymentRes {
  RespCode?: number;
  RespText?: string;
  QRImage?: string;
  ClientTransactionCode?: string;
  QRHeader?: string;
}

export interface VNPGetElectronicInvoiceInfoReq {
  uPharmaID?: number;
  Token?: string;
}

export interface VNPGetElectronicInvoiceInfoRes {
  RespCode?: number;
  RespText?: string;
  AutoRelease?: boolean;
  AutoSign?: boolean;
  AutoSendCQT?: boolean;
}

export interface VNPGetQRPaymentLstReq {
  uPharmaID?: number;
  Token?: string;
  TimeStart?: string;
  TimeEnd?: string;
  ShopCode?: string;
}

export interface VNPGetQRPaymentLstRes {
  RespCode?: number;
  RespText?: string;
  PaymentLst?: Record<string, any>[];
}

export interface VNPGetQRTransactionCodeReq {
  uPharmaID?: number;
  Token?: string;
  QRPayment?: string;
}

export interface VNPGetQRTransactionCodeRes {
  RespCode?: number;
  RespText?: string;
  ClientTransactionCode?: string;
  Amount?: number;
}

export interface VNPSetElectronicInvoiceInfoReq {
  uPharmaID?: number;
  Token?: string;
  AutoRelease?: boolean;
  AutoSign?: boolean;
  AutoSendCQT?: boolean;
}

export interface VNPSetElectronicInvoiceInfoRes {
  RespCode?: number;
  RespText?: string;
}

export interface VNPayCreateInvoiceFASTReq {
  uPharmaID?: number;
  Token?: string;
  DocumenID?: string;
}

export interface VNPayCreateInvoiceFASTRes {
  RespCode?: number;
  RespText?: string;
  ReferentCode?: string;
  ReceiptNumber?: number;
  ReceiptSymbol?: string;
  TaxAuthorityCode?: string;
  LookupCode?: string;
}

export interface VTBNotifyTransReq {
  msgId?: string;
  providerId?: string;
  transId?: string;
  transTime?: string;
  transType?: string;
  custCode?: string;
  sendBankId?: string;
  sendBranchId?: string;
  sendAcctId?: string;
  sendAcctName?: string;
  recvAcctId?: string;
  recvAcctName?: string;
  recvVirtualAcctId?: string;
  recvVirtualAcctName?: string;
  amount?: string;
  bankTransId?: string;
  remark?: string;
  currencyCode?: string;
  signature?: string;
}

export interface VTBNotifyTransRes {
  transId?: string;
  providerId?: string;
  errorCode?: string;
  errorDesc?: string;
  signature?: string;
}

export interface WEBCheckInventoryReq {
  Token?: string;
  ShopCode?: string;
  City?: string;
  Ward?: string;
  ProductIDLst?: Record<string, any>[];
}

export interface WEBCheckInventoryRes {
  RespCode?: number;
  RespText?: string;
  InventoryLst?: Record<string, any>[];
}

export interface WEBGetItemLstReq {
  uPharmaID?: number;
  Token?: string;
  GLevel1?: string;
  GLevel2?: string;
  GLevel3?: string;
  Search?: string;
  NumberRow?: number;
  PageNumber?: number;
}

export interface WEBGetItemLstRes {
  RespCode?: number;
  RespText?: string;
  ProductPostLst?: Record<string, any>[];
  NumberPage?: number;
}

export interface WEBGetItemLstWithOptionReq {
  uPharmaID?: number;
  Token?: string;
  GLevel1?: string;
  GLevel2?: string;
  GLevel3?: string;
  DosageForm?: string;
  ManufacturerName?: string;
  Distributor?: string;
  OrderByType?: number;
  Search?: string;
  NumberRow?: number;
  PageNumber?: number;
}

export interface WEBGetItemLstWithOptionRes {
  RespCode?: number;
  RespText?: string;
  ProductPostLst?: Record<string, any>[];
  NumberPage?: number;
}
