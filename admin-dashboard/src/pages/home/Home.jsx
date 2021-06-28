import Chart from "../../componenets/chart/Chart";
import FeaturedInfo from "../../componenets/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";

import WidgetSm from "../../componenets/WidgetSm/WidgetSm";
import WidgetLg from "../../componenets/WidgetLG/WidgetLg";

export default function Home() {
  return <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title="User Analitics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>;
}
