
    /**
     *  No Remark
     */
    export class QuantityDto {



            value?: number;


            unit?: string;


    }

    /**
     *  No Remark
     */
    export class PreShipmentListDto {



            shipmentNo: string;

            /*
0 = NotSet
1 = Ocean
2 = Air
3 = Truck
4 = Rail */
            transportationMode: number;


            creationTime: string;


            serviceUser: string;


            customerName: string;


            contactName: string;


            address: string;

            /*
0 = NotSet
1 = DeliveryGoodsByMyself
2 = PickUpByCityocean */
            fbaPickUpMethodType: number;


            cargoReadyDate: string;


            originAddressId: string;


            originAddress: string;


            originWarehouseId: string;


            originWarehouse: string;


            country: string;


            commodity: string;


            quantity: QuantityDto;


            weight: QuantityDto;


            volume: QuantityDto;


            channel: string;


            cargoPutAwayDate: string;


            serviceCompany: string;


            fbano: string;


            agentCustomer: string;


            creator: string;


            isCustomerCreate: boolean;


            id: string;


    }

    /**
     *  No Remark
     */
    export class BookingDetailDto {



            customerBookingId: string;


            isCustomerCreate: boolean;

            /*
0 = NotSet
1 = DeliveryGoodsByMyself
2 = PickUpByCityocean */
            fbaPickUpMethodType: number;


            contactId: string;


            originAddressId: string;


            originWarehouseId: string;


            destinationPortId: string;


            originPortId: string;


            destinationWarehouseId: string;


            destinationAddressId: string;


            deliveryDate: string;


            commodity: string;


            serviceCompanyId?: string;


            channel?: string;


    }

    /**
     *  No Remark
     */
    export class OceanShipmentDetailDto {



            carrierBookingNo: string;


    }

    /**
     *  No Remark
     */
    export class FbaShipmentDetailDto {



            expressNo: string;


            expressNoRemark: string;


            warehouseNo: string;


            huoLalaOrderNo: string;

            /*
0 = NotSet
1 = FCLDirectDelivery
2 = DeliveryAfterUnboxing
3 = SelfDelivery
4 = TemporaryWarehouse */
            fbaDeliveryType: number;


            fbaDeliveryTypeRemark: string;


            cargoPutAwayDate: string;


    }

    /**
     *  No Remark
     */
    export class CreateOrUpdateShipmentInput {



            serviceUserId: number;


            agentCustomerId: string;


            cargoReadyDate: string;


            pickUpTimeRange: string;


            incoterm: string;


            freightType: string;

            /*
0 = NotSet
1 = General
2 = Fba
3 = Fbm */
            tradeType: number;


            shipmentNo: string;


            transferNo: string;


            customsCustomerId: string;


            customsClearanceCustomerId: string;


            booking: BookingDetailDto;


            oceanShipment: OceanShipmentDetailDto;


            fbaShipment: FbaShipmentDetailDto;


            lineItems: any[];


            addressItems: any[];


            id: string;


            customerId?: string;

            /*
0 = NotSet
1 = Ocean
2 = Air
3 = Truck
4 = Rail */
            transportationMode?: number;


    }

    /**
     *  No Remark
     */
    export class WarehousingDto {



            shipmentIds: any[];


            warehousingDate?: string;


    }

    /**
     *  No Remark
     */
    export class ChangeShipmentInvalidStatusInput {



            shipmentIds: any[];


            isSetInvalid: boolean;


    }

    /**
     *  No Remark
     */
    export class GetPostAgentCustomerListOutput {



            items: any[];


    }

    /**
     *  No Remark
     */
    export class SetShipmentPostAgentCustomerInput {



            shipmentIds: any[];


            postAgentCustomerId: string;


    }

    /**
     *  No Remark
     */
    export class ShipmentDto {



            carrierBookingNo: string;

            /*
0 = NotSet
1 = DeliveryGoodsByMyself
2 = PickUpByCityocean */
            fbaPickUpMethodType: number;


            originAddressId: string;


            originAddress: string;


            originWarehouseId: string;


            originWarehouse: string;


            cargoReadyDate: string;

            /*
0 = NotSet
1 = Ocean
2 = Air
3 = Truck
4 = Rail */
            transportationMode: number;

            /*
0 = NotSet
1 = General
2 = Fba
3 = Fbm */
            tradeType: number;


            shipmentNo: string;


            creationTime: string;


            serviceUser: string;


            customerName: string;


            contactName: string;


            address: string;


            country: string;


            commodity: string;


            quantity: QuantityDto;


            weight: QuantityDto;


            volume: QuantityDto;


            channel: string;


            cargoPutAwayDate: string;


            serviceCompany: string;


            fbano: string;


            agentCustomer: string;


            creator: string;


            isCustomerCreate: boolean;


            id: string;


    }

    /**
     *  No Remark
     */
    export class GetShipmentListInput {



            agentCustomerId: string;


            channel: string;

            /*
0 = CreationTime
1 = LastModificationTime */
            queryTimeType: number;


            startTime: string;


            endTime: string;

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
    export class Expression {


            /*
0 = Add
1 = AddChecked
2 = And
3 = AndAlso
4 = ArrayLength
5 = ArrayIndex
6 = Call
7 = Coalesce
8 = Conditional
9 = Constant
10 = Convert
11 = ConvertChecked
12 = Divide
13 = Equal
14 = ExclusiveOr
15 = GreaterThan
16 = GreaterThanOrEqual
17 = Invoke
18 = Lambda
19 = LeftShift
20 = LessThan
21 = LessThanOrEqual
22 = ListInit
23 = MemberAccess
24 = MemberInit
25 = Modulo
26 = Multiply
27 = MultiplyChecked
28 = Negate
29 = UnaryPlus
30 = NegateChecked
31 = New
32 = NewArrayInit
33 = NewArrayBounds
34 = Not
35 = NotEqual
36 = Or
37 = OrElse
38 = Parameter
39 = Power
40 = Quote
41 = RightShift
42 = Subtract
43 = SubtractChecked
44 = TypeAs
45 = TypeIs
46 = Assign
47 = Block
48 = DebugInfo
49 = Decrement
50 = Dynamic
51 = Default
52 = Extension
53 = Goto
54 = Increment
55 = Index
56 = Label
57 = RuntimeVariables
58 = Loop
59 = Switch
60 = Throw
61 = Try
62 = Unbox
63 = AddAssign
64 = AndAssign
65 = DivideAssign
66 = ExclusiveOrAssign
67 = LeftShiftAssign
68 = ModuloAssign
69 = MultiplyAssign
70 = OrAssign
71 = PowerAssign
72 = RightShiftAssign
73 = SubtractAssign
74 = AddAssignChecked
75 = MultiplyAssignChecked
76 = SubtractAssignChecked
77 = PreIncrementAssign
78 = PreDecrementAssign
79 = PostIncrementAssign
80 = PostDecrementAssign
81 = TypeEqual
82 = OnesComplement
83 = IsTrue
84 = IsFalse */
            nodeType: number;


            type: string;


            canReduce: boolean;


    }


    /**
     *  No Remark
     */
    export class ExportSideMarksReportInput {



            ids: any[];


    }

    /**
     *  No Remark
     */
    export class ExportSideMarksReportOutput {



            fileId: any[];


    }

    /**
     *  No Remark
     */
    export class SideMarksData {



            bookingId: string;


            serviceCompanyId: string;


            quantity: number;


            shipmentNo: string;


            warehouse: string;


            country: string;


            warehouseCode: string;

            /*
0 = NotSet
1 = General
2 = Fba
3 = Fbm */
            tradeType: number;


            fbaNo: string;


            customerService: string;


            customerServiceTel: string;


            customerServiceCompany: string;


    }

    /**
     *  No Remark
     */
    export class GenerateWarehouseReciptInput {



            ids: any[];


    }

    /**
     *  No Remark
     */
    export class GenerateWarehouseReciptOutput {



            fileIds: any[];


    }


