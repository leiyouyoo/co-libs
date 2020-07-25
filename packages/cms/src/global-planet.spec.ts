import { defineApplication, clearGlobalPlanet } from './global-planet';
import { PlanetPortalApplication } from './application/portal-application';

describe('defineApplication', () => {
    afterEach(() => {
        clearGlobalPlanet();
    });

    it('should define application success', () => {
        defineApplication('app1', "1.0.0", (portalApp?: PlanetPortalApplication) => {
            return new Promise(() => { });
        });
        expect(window['planet'].apps['app1']).toBeTruthy();
    });

    it('should throw error when define application has exist', () => {
        defineApplication('app1', "1.0.0", (portalApp?: PlanetPortalApplication) => {
            return new Promise(() => { });
        });
        expect(() => {
            defineApplication('app1', "1.0.0", (portalApp?: PlanetPortalApplication) => {
                return new Promise(() => { });
            });
        }).toThrowError('app1 application has exist.');
    });
});
