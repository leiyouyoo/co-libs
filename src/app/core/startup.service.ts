import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Injector } from '@angular/core';
import { TitleService } from '@co/common';
import { NzIconService } from 'ng-zorro-antd/icon';
import { ICONS } from '../../style-icons';

@Injectable()
export class StartupService {
  constructor(private injector: Injector, iconSrv: NzIconService, @Inject(DOCUMENT) private doc: Document) {
    iconSrv.addIcon(...ICONS);
  }

  load(): Promise<any> {

    window.localStorage.setItem("co.session", `{
      "session": {
          "user": {
              "customerId": "51d907e2-a9c2-4ea2-9759-bb6eafc398be",
              "serviceCustomerId": "00000000-0000-0000-0000-000000000000",
              "serviceCustomerTenantId": 0,
              "serviceCustomerTenantName": null,
              "name": "DAVID",
              "surname": "",
              "userName": "DAVID",
              "emailAddress": "itservice@cityocean.com",
              "profilePictureId": null,
              "roles": [
                  "Sales",
                  "Staff"
              ],
              "positions": [
                  {
                      "positionName": "LASC销售代表",
                      "jobName": "销售代表",
                      "organizationUnitName": "Organization.PCH.YDQ.BMQ.LA.LASC"
                  }
              ],
              "impersonatorUserId": null,
              "id": 1198
          },
          "tenant": {
              "tenancyName": "City Ocean",
              "name": "City Ocean",
              "logoId": null,
              "logoFileType": null,
              "creationTime": "0001-01-01T00:00:00Z",
              "impersonatorTenantId": null,
              "id": 1
          },
          "platform": {
              "name": "CityOcean Platform",
              "desc": "CityOcean Platform",
              "version": "0.11.43",
              "releaseDate": "2020-07-16T15:40:46.4553801Z"
          },
          "multiTenancySide": 0
      },
      "localization": {
          "currentCulture": {
              "name": "en",
              "displayName": "英语"
          },
          "languages": [
              {
                  "name": "en",
                  "displayName": "English",
                  "icon": "famfamfam-flags us",
                  "isDefault": true,
                  "isDisabled": false,
                  "isRightToLeft": false
              },
              {
                  "name": "zh-Hans",
                  "displayName": "简体中文",
                  "icon": "famfamfam-flags cn",
                  "isDefault": false,
                  "isDisabled": false,
                  "isRightToLeft": false
              }
          ],
          "currentLanguage": {
              "name": "en",
              "displayName": "English",
              "icon": "famfamfam-flags us",
              "isDefault": true,
              "isDisabled": false,
              "isRightToLeft": false
          },
          "sources": null,
          "values": null
      },
      "auth": {
          "grantedDataPermissions": [],
          "grantedFunctionPermissions": [
              "CRM.Customers",
              "CRM.Customers.Edit",
              "CRM.CustomerQuotes",
              "CRM.CustomerQuotes.Edit",
              "CRM.OceanPrices",
              "CRM.OceanPrices.Edit",
              "CRM.Bookings",
              "CRM.Bookings.Edit",
              "CRM.Dashboard"
          ]
      },
      "nav": {
          "menus": {
              "MainMenu": {
                  "name": "MainMenu",
                  "displayName": "Main menu",
                  "customData": null,
                  "items": [
                      {
                          "name": "CRM_Customers",
                          "icon": "icon-settingx",
                          "displayName": "Customers",
                          "order": 13,
                          "url": "/crm/#/crm/home/customer",
                          "customData": {
                              "type": 0,
                              "id": "03234d2b-73a8-4975-d30f-08d7e2a23614"
                          },
                          "target": null,
                          "isEnabled": true,
                          "isVisible": true,
                          "items": []
                      },
                      {
                          "name": "CRM_CustomerQuotes",
                          "icon": "icon-settingx",
                          "displayName": "Inquries",
                          "order": 17,
                          "url": "/crm/#/crm/quotes/quoteslist",
                          "customData": {
                              "type": 0,
                              "id": "a5421a7c-5f88-40e0-d310-08d7e2a23614"
                          },
                          "target": null,
                          "isEnabled": true,
                          "isVisible": true,
                          "items": []
                      },
                      {
                          "name": "CRM_CustomerInquiries",
                          "icon": "icon-settingx",
                          "displayName": "Rates",
                          "order": 19,
                          "url": "/crm/#/crm/inquiry/list",
                          "customData": {
                              "type": 0,
                              "id": "3c659e64-5ca7-4534-d311-08d7e2a23614"
                          },
                          "target": null,
                          "isEnabled": true,
                          "isVisible": true,
                          "items": []
                      },
                      {
                          "name": "CRM_CustomerBookings",
                          "icon": "icon-settingx",
                          "displayName": "Bookings",
                          "order": 18,
                          "url": "/crm/#/crm/booking/bookinglist",
                          "customData": {
                              "type": 0,
                              "id": "50ee1077-dbee-42ca-d312-08d7e2a23614"
                          },
                          "target": null,
                          "isEnabled": true,
                          "isVisible": true,
                          "items": []
                      },
                      {
                          "name": "CRM_Dashboard",
                          "icon": "icon-icon_Dashboardx",
                          "displayName": "Dashboard",
                          "order": 12,
                          "url": "/crm/#/crm/dashboard",
                          "customData": {
                              "type": 0,
                              "id": "ec9eb14d-fb72-4b77-4e4b-08d7eb536a0a"
                          },
                          "target": null,
                          "isEnabled": true,
                          "isVisible": true,
                          "items": []
                      }
                  ]
              }
          }
      },
      "setting": {
          "values": {
              "Abp.Localization.DefaultLanguageName": null,
              "Abp.Notifications.ReceiveNotifications": "true",
              "Abp.Timing.TimeZone": "UTC",
              "Platform.MenuSettingNames.DefaultMenus": "CRM",
              "CSP.NewsAndUpdates.EmailMeTheDailyShipmentDigest": "false",
              "CSP.NewsAndUpdates.EmailMeTheWeeklyShipmentDigest": "false"
          }
      },
      "clock": {
          "provider": "utcClockProvider"
      },
      "timing": {
          "timeZoneInfo": {
              "windows": {
                  "timeZoneId": "UTC",
                  "baseUtcOffsetInMilliseconds": 0.0,
                  "currentUtcOffsetInMilliseconds": 0.0,
                  "isDaylightSavingTimeNow": false
              },
              "iana": {
                  "timeZoneId": "Etc/UTC"
              }
          }
      },
      "security": {
          "antiForgery": {
              "tokenCookieName": null,
              "tokenHeaderName": null
          }
      }
  }`);
    return new Promise(resolve => {
      this.doc.querySelector('#_slow')!.remove();
      this.injector.get(TitleService).suffix = 'CO Libs';

      resolve();
    });
  }
}
