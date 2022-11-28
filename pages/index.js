import {NavigationLayout} from "../layouts";
import Image from "next/image";
import filters from '../public/statics/images/filter.png';
import grids from '../public/statics/images/grid.png';

export default function Home() {
    return (
        <div>
            <NavigationLayout>
                <Image
                    src={filters}
                    alt='filters'
                />
                <Image
                    src={grids}
                    alt='grids'
                />
            </NavigationLayout>
        </div>
    )
}
