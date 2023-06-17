import {LocationGroupType} from "./MapLocationGroup";

/**
 * A Conan Exiles coordinate.
 *
 * If converting from // TeleportPlayer, the coordinates are x, y and z.
 * So:
 * // TeleportPlayer x y z
 */
export interface MapLocation {
    x: number;
    y: number;
    z: number;
    // Spawns in place of which thrall type?
    spawnSpot?: string;
    spawnSpotDetail?: string;
    type?: LocationGroupType;
    // Name of the general area
    location?: string;
}

export function determineIcon(location: MapLocation): string {
    switch (location.type) {
        case LocationGroupType.BOSS:
            return 'icon_camp.png';
    }
    return '';
}

