import React from "react"
import Card from "./Card"
import cric from "../src/images/cricketimg.jpg"
import foot from "../src/images/footballimage.jpg"
import basket from "../src/images/basketimg.jpg"
import hock from "../src/images/hockeyimg.jpg"
import volli from "../src/images/volleyballimg.jpg"
import rugby from "../src/images/rugbyimg.jpg"
const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">
                    OUR SERVICES</h1>
            </div>
            <div classroom="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">

                            <Card imgsrc={cric}
                                title="CRICKET"
                                text="A cricket kit is an important equipment for every cricket player to safeguard against any injury. Focus should be on the quality of the kit and the components used for cushioning and safety of the player. A cricket kit should be purchased based on the height, weight, and torso of the player. Our kit contains all the relevant components that are designed to protect you from any injury. The FLX gloves, batting pads and helmets have been put through rigorous testing and safety conformity tests, following guideliness of the British Standard (followed by ICC)."
                                btnav="Order" />
                            <Card imgsrc={foot}
                                title="FOOTBALL"
                                text="Football is a game which requires flexibility and freedom of movement. It’s important that you choose the right type of clothing so that you feel comfortable and can perform your kicks and jumps with ease. Matching t-shirts, shorts, and socks also help you differentiate your teammates from your opponents. Injuries are a common occurrence in a football game if you aren’t careful. Shin guards help you avoid injuries even if you tackled hard by the opposition’s defence."
                                btnav="" />
                            <Card imgsrc={basket}
                                title="BASKETBALL"
                                text="Are you a basketball enthusiast? Know someone who enjoys playing basketball and want to gift them basketball gear? Well, explore a wide range from Nike, Spalding, Cosco, Nivia and more. Available in different colours, Spalding basketballs are the rage among all basketball lovers. Go for a black ball with golden highlights and add an air of supremacy to your playtime. "
                                btnav="Order" />
                            <Card imgsrc={hock}
                                title="HOCKEY"
                                text="We provide premium quality range of hockey goalkeeper kits and accessories that is manufactured in accordance with modern techniques. Keeping in mind the difficulties faced by the goalkeepers, we are able to provide enhanced range of hockey goalkeeper kits and accessories."
                                btnav="Order" />
                            <Card imgsrc={volli}
                                title="VOLLEYBALL"
                                text="Literally, where would you be if you didn't have volleyball knee pads, pole systems, ball carts, nets, training aids and other volleyball supplies? Answer...on the soccer field!"
                                btnav="Order" />
                            <Card imgsrc={rugby}
                                title="RUGBY"
                                text="This toolkit looks to help in the recruitment of the people who are waiting to be asked to help. It provides the framework to build a volunteer strategy and provides practical examples. The objective of the IRFU and Leinster Rugby is to create a family of rugby clubs who work together and share best practice for their own benefit."
                                btnav="Order" />


                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
export default Service;