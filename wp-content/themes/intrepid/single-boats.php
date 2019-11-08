<?php
get_header();
the_post();
?>
<main class="page__single page__single--boat main">
    <section class="hero hero--model" style="background-image:url(<?php echo STYLEDIR; ?>/uploads/410-evolution-hero.jpg);">
        <div class="container">
            <div class="model__title-box">
                <h1 class="model__title"><strong>410</strong> Evolution</h1>
            </div>
            <a class="model__360-view" href="#">360 view</a>
        </div>
    </section>
    <div id="parentTab">
        <div class="nav-block">
            <div class="nav-block__toggle"><span class="nav-block__active-tab">Overview</span><span class="icon-close icon-close--white"></span></div>
            <div class="nav-block__inner">
                <div class="container">
                    <ul class="model-nav resp-tabs-list hor_1">
                        <li class="model-nav__item active">Overview</li>
                        <li class="model-nav__item">Gallery</li>
                        <li class="model-nav__item">Features</li>
                        <li class="model-nav__item">Deck Plan</li>
                        <li class="model-nav__item">Motors</li>
                        <li class="model-nav__item">Options</li>
                    </ul>
                </div>
                <a href="#" class="sticky-btn" data-class="build-a-boat-toggle">Build Yours<svg class="icon icon-arrow-up" aria-hidden="true" role="img">
                    <use xlink:href="#icon-arrow-up" x="0" y="0"></use>
                </svg></a>
            </div>
        </div>
        <div class="resp-tabs-container hor_1">
            <div>
                <!-- overview start -->
                <section class="overview-block">
                    <div class="container">
                        <div class="overview-block__content">
                            <h2 class="overview-block__title">Charles darwin wrote about evolution. <strong>we built it.</strong></h2>
                            <div class="overview-block__description">
                                <p>An exquisitely crafted byproduct of 30 years of evolution and 2 years of design, the 410 Evolution has pushed the class of high-end yachts to a new unchartered plateau. This is a 41.19-foot display of power, stability and maneuverability with its revolutionary step hull design and triple outboard engines that don’t sacrifice an inch of cockpit space for performance. The cockpit itself features an electronic sunroof, and perfectly sculpted and innovatively designed helm seating that converts to create more open seating and conversational space.</p>
                                <p>For diving and swimming, an integrated hullside dive door with a foldout ladder is located starboard. Relax in a cabin adorned with a queen berth mattress, custom u-shaped settee, a stainless steel refrigerator/freezer, electric cooktop and microwave with wood veneered cabinetry throughout. There is even an electronic dinette with wooden surface that lowers to create an additional berth. Yes, it was a long time in the making. But when you experience it, there will be no doubt in your mind it was well worth the wait.</p>
                            </div>
                            <ul class="overview-nav">
                                <li class="overview-nav__item"><a href="#">See the Gallery</a></li>
                                <li class="overview-nav__item"><a href="#">Deck Plan</a></li>
                                <li class="overview-nav__item"><a href="#">Virtual Tour</a></li>
                                <li class="overview-nav__item"><a href="#">Build Yours Own</a></li>
                            </ul>
                        </div>
                        <div class="stat-block">
                            <span class="stat-block__title">Quick Statistics</span>
                            <ul class="quick-stat">
                                <li class="quick-stat__item">
                                    <span class="quick-stat__title">Standard Fuel</span>
                                    <span class="quick-stat__value">270 GALLONS</span>
                                </li>
                                <li class="quick-stat__item">
                                    <span class="quick-stat__title">BEAM</span>
                                    <span class="quick-stat__value">9'10"</span>
                                </li>
                                <li class="quick-stat__item">
                                    <span class="quick-stat__title">LENGTH</span>
                                    <span class="quick-stat__value">32'7"</span>
                                </li>
                                <li class="quick-stat__item">
                                    <span class="quick-stat__title">WATER</span>
                                    <span class="quick-stat__value">20 GALLONS</span>
                                </li>
                            </ul>
                            <a href="#" class="btn btn--dark">Download Brochure</a>
                        </div>
                    </div>
                    <div class="btn-wrap">
                        <a href="#" class="btn btn--dark">Contact a sales representative</a>
                    </div>
                </section>
                <!-- overview end -->
            </div>
            <div>
                <div id="childTab">
                    <ul class="resp-tabs-list hor_child_1">
                        <li> Gallery </li>
                        <li> Virtual Tour </li>
                    </ul>

                    <div class="resp-tabs-container hor_child_1">
                        <div>
                            <!-- gallery start -->
                            <div class="gallery-grid">
                                <div class="container">
                                    <div class="gallery-grid__item gallery-grid__item--half">
                                        <img src="<?php echo STYLEDIR; ?>/uploads/gallery-image1.jpg" alt="gallery-image1" />
                                    </div>
                                    <div class="gallery-grid__item gallery-grid__item--half">
                                        <img src="<?php echo STYLEDIR; ?>/uploads/gallery-image2.jpg" alt="gallery-image2" />
                                    </div>
                                    <div class="gallery-grid__item gallery-grid__item--full gallery-grid__item--video">
                                        <img src="<?php echo STYLEDIR; ?>/uploads/gallery-image3.jpg" alt="gallery-image3" />
                                        <a data-fancybox href="https://vimeo.com/160120764" class="play-btn">Play Video</a>
                                        <div class="overlay-content">
                                            <img src="<?php echo IMAGES; ?>/amazing-with-text.png" alt="Proof that amazing takes time">
                                        </div>
                                    </div>
                                    <div class="gallery-grid__item gallery-grid__item--one-third">
                                        <img src="<?php echo STYLEDIR; ?>/uploads/gallery-image4.jpg" alt="gallery-image4" />
                                    </div>
                                    <div class="gallery-grid__item gallery-grid__item--one-third">
                                        <img src="<?php echo STYLEDIR; ?>/uploads/gallery-image5.jpg" alt="gallery-image5" />
                                    </div>
                                    <div class="gallery-grid__item gallery-grid__item--one-third">
                                        <img src="<?php echo STYLEDIR; ?>/uploads/gallery-image6.jpg" alt="gallery-image6" />
                                    </div>
                                    <div class="gallery-grid__item gallery-grid__item--one-third">
                                        <img src="<?php echo STYLEDIR; ?>/uploads/gallery-image7.jpg" alt="gallery-image7" />
                                    </div>
                                    <div class="gallery-grid__item gallery-grid__item--two-third">
                                        <img src="<?php echo STYLEDIR; ?>/uploads/gallery-image8.jpg" alt="gallery-image8" />
                                    </div>
                                    <div class="gallery-grid__item gallery-grid__item--half">
                                        <img src="<?php echo STYLEDIR; ?>/uploads/gallery-image1.jpg" alt="gallery-image1" />
                                    </div>
                                    <div class="gallery-grid__item gallery-grid__item--half">
                                        <img src="<?php echo STYLEDIR; ?>/uploads/gallery-image2.jpg" alt="gallery-image2" />
                                    </div>
                                    <div class="gallery-grid__item gallery-grid__item--two-third">
                                        <img src="<?php echo STYLEDIR; ?>/uploads/gallery-image9.jpg" alt="gallery-image9" />
                                    </div>
                                    <div class="gallery-grid__item gallery-grid__item--one-third">
                                        <img src="<?php echo STYLEDIR; ?>/uploads/gallery-image10.jpg" alt="gallery-image10" />
                                    </div>
                                </div>
                                <div class="btn-wrap">
                                    <a href="#" class="scroll-to-top"><svg class="icon icon-arrow-up" aria-hidden="true" role="img">
                                        <use xlink:href="#icon-arrow-up" x="0" y="0"></use>
                                    </svg>Back to Top</a>
                                    <a href="#" class="btn btn--dark">Contact a sales representative</a>
                                </div>
                            </div>
                            <!-- gallery end -->
                        </div>
                        <div>
                            <!-- virtual tour start -->
                            <div class="virtula-tour">
                                <div class="container">
                                    iframe goes here
                                </div>
                            </div>
                            <!-- virtual tour end -->
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <!-- features start -->
                <section class="features-block">
                    <div class="container">
                        <div class="feature-list">
                            <div class="feature-list__item">
                                <h2 class="feature-list__title">Construction</h2>
                                <ul class="list">
                                    <li class="list__item">316 Stainless Fasteners Throughout</li>
                                    <li class="list__item">Composite Fiberglass Stringer System</li>
                                    <li class="list__item">Fully Integrated Hull/Motor Well Bracket</li>
                                    <li class="list__item">Hand Laid Hull with Non-woven Multidirectional Reinforcements and Vacuum Bagged Coring</li>
                                    <li class="list__item">Hi-Flex Gel-coat</li>
                                    <li class="list__item">High Gloss White Urethane Painted Bilges</li>
                                    <li class="list__item">Resin Infused Liner and Deck Modules</li>
                                </ul>
                            </div>
                            <div class="feature-list__item">
                                <h2 class="feature-list__title">Mechanical Equipment</h2>
                                <ul class="list">
                                    <li class="list__item">(8kw) Compact Diesel Generator</li>
                                    <li class="list__item">Aluminum Fuel Tanks with Level Senders</li>
                                    <li class="list__item">Bronze Thru-hulls with Seacocks Below Waterline</li>
                                    <li class="list__item">Fire Suppression System in Mechanical Room with Automatic Generator Shut Down</li>
                                    <li class="list__item">Gas/Water Separator on Generator Exhaust System</li>
                                    <li class="list__item">Power Assisted Hydraulic Steering with Tilt Helm</li>
                                    <li class="list__item">Waste/Holding Tank Odor Proof Polyethylene with Level Sender and Tornado Flush Fitting</li>
                                    <li class="list__item">Water Tank Food Grade Polyethylene</li>
                                </ul>
                            </div>
                            <div class="feature-list__item">
                                <h2 class="feature-list__title">Head/Shower</h2>
                                <ul class="list">
                                    <li class="list__item">Blinds</li>
                                    <li class="list__item">Electric Head with Freshwater Supply</li>
                                    <li class="list__item">Exhaust Fan</li>
                                    <li class="list__item">Faucet Single Lever</li>
                                    <li class="list__item">Outlets, AC 1 Double Outlets ELCI Protected</li>
                                    <li class="list__item">Shower Stall with Acrylic Door</li>
                                    <li class="list__item">Skylights (1) Fixed</li>
                                    <li class="list__item">Sole Tile and Fiberglass Finish</li>
                                    <li class="list__item">Toilet Paper Holder Behind Locker Door</li>
                                    <li class="list__item">Towel Bar</li>
                                    <li class="list__item">Vanity Counter Solid Surface with Vessel Sink</li>
                                    <li class="list__item">Vanity Mirror</li>
                                </ul>
                            </div>
                            <div class="feature-list__item">
                                <h2 class="feature-list__title">Cockpit/Aft Deck</h2>
                                <ul class="list">
                                    <li class="list__item">Cockpit Hatches Guttered, Gasket, “T” Handle Dogs and Stainless Steel Gas Springs</li>
                                    <li class="list__item">Courtesy Lights, 12 Volt, LED Three Step Lights Two Under Gunnels</li>
                                    <li class="list__item">Dockside Freshwater Inlet</li>
                                    <li class="list__item">Freshwater Washdown Outlet</li>
                                    <li class="list__item">Insulated Storage Box Aft</li>
                                    <li class="list__item">Integrated Starboard Hullside Access Door with Fold Out Ladder System (Dive Door)</li>
                                    <li class="list__item">Scuppers</li>
                                    <li class="list__item">Sea Water Washdown Outlet</li>
                                    <li class="list__item">Self Bailing Cockpit</li>
                                    <li class="list__item">Shore Power Inlet (Stainless Steel)</li>
                                    <li class="list__item">Transom Shower with Retractable Hose, Hot/Cold</li>
                                </ul>
                            </div>
                            <div class="feature-list__item">
                                <h2 class="feature-list__title">Galley</h2>
                                <ul class="list">
                                    <li class="list__item">Blinds</li>
                                    <li class="list__item">Cabinet, Upper Galley</li>
                                    <li class="list__item">Countertop, Solid Surface with Sink</li>
                                    <li class="list__item">Drawers Stainless Steel Lined</li>
                                    <li class="list__item">Electric Dual Cook Top</li>
                                    <li class="list__item">Faucet Single Lever</li>
                                    <li class="list__item">Forward Recessed Deck Skylight</li>
                                    <li class="list__item">Microwave</li>
                                    <li class="list__item">Outlets, AC 2 Double Outlets ELCI Protected</li>
                                    <li class="list__item">Refrigerator/Freezer Stainless Steel</li>
                                    <li class="list__item">Waste Basket</li>
                                </ul>
                            </div>
                            <div class="feature-list__item">
                                <h2 class="feature-list__title">Cabin Features</h2>
                                <ul class="list">
                                    <li class="list__item">Custom U-Shaped Settee</li>
                                    <li class="list__item">Dinette Table Hi-Lo Electric, with Solid Wood Surface with Filler Cushion to Create Additional Berth</li>
                                    <li class="list__item">Drawers, Wood Faced with Stainless Steel Drawer Slides</li>
                                    <li class="list__item">Hanging Locker with Automatic Light 12 Volt LED</li>
                                    <li class="list__item">Hardware, Stainless Steel and Chrome</li>
                                    <li class="list__item">Headlining, Soft Panels</li>
                                    <li class="list__item">Lighting, Accent, 12 Volt LED</li>
                                    <li class="list__item">Lighting, Courtesy, 12 Volt LED</li>
                                    <li class="list__item">Lighting, Overhead, 12 Volt, LED with Dimmers</li>
                                    <li class="list__item">Lights, Reading at Berths, 12 Volt LED</li>
                                    <li class="list__item">Outlets, AC 3 Double Outlets ELCI Protected</li>
                                    <li class="list__item">Queen Berth Forward with Custom Deluxe Innerspring Mattress</li>
                                    <li class="list__item">Skylight Hatches (2) Opening</li>
                                    <li class="list__item">Skylights (2) Fixed</li>
                                    <li class="list__item">Sole, Access Hatches</li>
                                    <li class="list__item">Sole, Hardwood</li>
                                    <li class="list__item">Steps with Hardwood Treads</li>
                                    <li class="list__item">Window Shades, Cabin</li>
                                    <li class="list__item">Wood Veneered Cabinetry</li>
                                </ul>
                            </div>
                            <div class="feature-list__item">
                                <h2 class="feature-list__title">Exterior Equipment</h2>
                                <ul class="list">
                                    <li class="list__item">Anchor Chain Locker, Self-draining/Hidden Cleat</li>
                                    <li class="list__item">Anchor Chute with Stainless Steel Chafe Plates and Anchor Roller</li>
                                    <li class="list__item">Anodized Aluminum Bow Rail</li>
                                    <li class="list__item">Boarding Ladder on Swim Platform</li>
                                    <li class="list__item">Bow Eye</li>
                                    <li class="list__item">Cleats, Bow, Spring and Stern</li>
                                    <li class="list__item">Deck Fills (Diesel, Gas, Water and Waste Pump Out)</li>
                                    <li class="list__item">Heavy-Duty White Rub Rail</li>
                                    <li class="list__item">Mast, Navigation Lights</li>
                                    <li class="list__item">Non-Skid Deck and Gunwales</li>
                                    <li class="list__item">Skylight Hatches in Cabin</li>
                                    <li class="list__item">Sun Pad with Integrated Cup Holders</li>
                                    <li class="list__item">Swim Platforms Port and Starboard</li>
                                    <li class="list__item">Windlass 12 Volt, Vertical, Low Profile, Chain/Rode, with Handheld Remote</li>
                                    <li class="list__item">Windshield (with Wiper System) for (3) Sided Enclosed Bridge Deck with Opening Side Windows</li>
                                </ul>
                            </div>
                            <div class="feature-list__item">
                                <h2 class="feature-list__title">Electrical Equipment</h2>
                                <ul class="list">
                                    <li class="list__item">AC/DC Distribution system, 12 Volt, 120 /240 Volt 60/50 Hz with Digital Meters</li>
                                    <li class="list__item">Air-conditioning, Cabin, Reverse Cycle, with Digital Control</li>
                                    <li class="list__item">Alarms, High Bilge Water</li>
                                    <li class="list__item">Batteries, AGM Glass Mat, with Boxes, Lids and Straps, 3 x GP 31 for Engines, 1 x GP 31 for House</li>
                                    <li class="list__item">Battery Charging System</li>
                                    <li class="list__item">Battery Switches Emergency Paralleling</li>
                                    <li class="list__item">Battery Switches Remote Operated</li>
                                    <li class="list__item">Bilge Lights, Center Aft Compartment LED</li>
                                    <li class="list__item">Bilge Pumps 4 x 12 Volt Automatic</li>
                                    <li class="list__item">Bonding System</li>
                                    <li class="list__item">Carbon Monoxide Detector</li>
                                    <li class="list__item">Exhaust Fan, Generator Compartment 12 Volt</li>
                                    <li class="list__item">Exhaust Fan, Shower Compartment 12 Volt</li>
                                    <li class="list__item">Freshwater Pump 12 Volt Pump</li>
                                    <li class="list__item">Galvanic Isolator</li>
                                    <li class="list__item">Gray Water Pump 12 Volt</li>
                                    <li class="list__item">Holding Tank, Direct Overboard Discharge for Toilet with Y Valve</li>
                                    <li class="list__item">Indicator Light, Reverse Polarity</li>
                                    <li class="list__item">Mechanical Room Lights 12 Volt four PC</li>
                                    <li class="list__item">Navigation Lights, 12 Volt - LED</li>
                                    <li class="list__item">Raw Water Washdown Pump, 12 Volts</li>
                                    <li class="list__item">Shore Power Inlet, Aft, AC, 50 amp 120 / 240 Volt / 60 Hz</li>
                                    <li class="list__item">Tank Gauges for Gasoline, Diesel, Water and Waste</li>
                                    <li class="list__item">Trim Tabs 12 Volt dual pump BXT Series with Auto Retract</li>
                                    <li class="list__item">Water Heater (11 Gallon), 240 Volt</li>
                                    <li class="list__item">Windshield Wipers, 12 Volt with Speed Control Auto Park and Washer</li>
                                    <li class="list__item">Wiring, Marine-grade Tin-plated Copper</li>
                                </ul>
                            </div>
                            <div class="feature-list__item">
                                <h2 class="feature-list__title">Bridgedeck</h2>
                                <ul class="list">
                                    <li class="list__item">Bridge Deck Infinity Flooring Woven Vinyl</li>
                                    <li class="list__item">Compass</li>
                                    <li class="list__item">Electronics Console, At Helm</li>
                                    <li class="list__item">Electronics Console, Companion Port Side</li>
                                    <li class="list__item">Helm Seat Double, Three Way Electronic Control and Adjustable Bolster and Reversible Backrest</li>
                                    <li class="list__item">Light, Courtesy (2)</li>
                                    <li class="list__item">Lighting, Hardtop, 12 Volt, LED</li>
                                    <li class="list__item">Lighting, Red Overhead Night Lighting</li>
                                    <li class="list__item">Outlets, 1 x 2 Gang GFCI</li>
                                    <li class="list__item">Outlets, 2 x USB at Helm Console</li>
                                    <li class="list__item">Settee L shaped (Port Side) with Custom Adjustable Co-pilot Seat Forward</li>
                                    <li class="list__item">Settee, L shaped (Starboard)</li>
                                    <li class="list__item">Steering Wheel, Stainless Steel</li>
                                    <li class="list__item">Sunroof (Electric)</li>
                                    <li class="list__item">Push Button LED Backlit Switches</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="btn-wrap">
                        <a href="#" class="btn btn--dark">Contact a sales representative</a>
                    </div>
                </section>
                <!-- features end -->
            </div>
            <div>
                <!-- deck plan start -->
                <div class="deck-block">
                    <div class="container">
                        <img class="deck-desktop" src="<?php echo STYLEDIR; ?>/uploads/DeckPlanPic.jpg" alt="Boat Deck Plan">
                        <img class="deck-mobile" src="<?php echo STYLEDIR; ?>/uploads/DeckPlanPic-mobile.jpg" alt="Boat Deck Plan">
                        <span class="deck-block__short-note">Select to see features</span>
                    </div>
                    <div class="deck-block__info">
                        <div class="container">
                            <div class="deck-info">
                                <span class="deck-info__number">19</span>
                                <figure class="deck-info__thumbnail">
                                    <img src="<?php echo STYLEDIR; ?>/uploads/premium-upholstery-package.jpg" alt="premium-upholstery-package" />
                                </figure>
                                <div class="deck-info__content">
                                    <h2 class="deck-info__title">Captain's Chair</h2>
                                    <div class="deck-info__description">
                                        <p>This is the description of the item that is selected. May be one or two sentences but nothing too crazy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel-close text--right">
                            <a href="javascript:void(0);" class="close">CLOSE <span class="icon-close"></span></a>
                        </div>
                    </div>
                    <div class="btn-wrap">
                        <a href="#" class="btn btn--dark">Contact a sales representative</a>
                    </div>
                </div>
                <!-- deck plan start -->
            </div>
            <div>
                <!-- motor start -->
                <section class="motor-block">
                    <div class="container">
                        <h2 class="motor-block__title">Motor selections for <strong>410 evolution</strong></h2>
                        <ul class="motor-list">
                            <li class="motor-list__item">
                                <figure class="motor-list__thumbnail">
                                    <img src="<?php echo STYLEDIR; ?>/uploads/seven-marine-motor.jpg" alt="seven-marine-motor" />
                                </figure>
                                <div class="motor-list__content">
                                    <h2 class="motor-list__title">Seven Marine<span class="motor-list__trigger"></span></h2>
                                    <div class="motor-list__description">
                                        <p>Seven is an evolution in outboard engineering and customer service. At the heart of a Seven, Luxury Performance. A supercharged 6.2L V8, powerful acceleration, and more technology than ever before under a cowl, supported with concierge service. Intrepid Powerboats from the 375 to the 475 offer the opportunity to go farther and faster with twin, triple or quad 627hp and 557hp Seven’s. Personalize your power and match it to the boat with SpectraBlade LED illumination, infinite color choices and carbon accents.</p>
                                    </div>
                                </div>
                            </li>
                            <li class="motor-list__item">
                                <figure class="motor-list__thumbnail">
                                    <img src="<?php echo STYLEDIR; ?>/uploads/yamaha-motor.jpg" alt="yamaha-motor" />
                                </figure>
                                <div class="motor-list__content">
                                    <h2 class="motor-list__title">Yamaha<span class="motor-list__trigger"></span></h2>
                                    <div class="motor-list__description">
                                        <p>Seven is an evolution in outboard engineering and customer service. At the heart of a Seven, Luxury Performance. A supercharged 6.2L V8, powerful acceleration, and more technology than ever before under a cowl, supported with concierge service. Intrepid Powerboats from the 375 to the 475 offer the opportunity to go farther and faster with twin, triple or quad 627hp and 557hp Seven’s. Personalize your power and match it to the boat with SpectraBlade LED illumination, infinite color choices and carbon accents.</p>
                                    </div>
                                </div>
                            </li>
                            <li class="motor-list__item">
                                <figure class="motor-list__thumbnail">
                                    <img src="<?php echo STYLEDIR; ?>/uploads/mercury-motor.jpg" alt="mercury-motor" />
                                </figure>
                                <div class="motor-list__content">
                                    <h2 class="motor-list__title">Mercury<span class="motor-list__trigger"></span></h2>
                                    <div class="motor-list__description">
                                        <p>Seven is an evolution in outboard engineering and customer service. At the heart of a Seven, Luxury Performance. A supercharged 6.2L V8, powerful acceleration, and more technology than ever before under a cowl, supported with concierge service. Intrepid Powerboats from the 375 to the 475 offer the opportunity to go farther and faster with twin, triple or quad 627hp and 557hp Seven’s. Personalize your power and match it to the boat with SpectraBlade LED illumination, infinite color choices and carbon accents.</p>
                                    </div>
                                </div>
                            </li>
                            <li class="motor-list__item">
                                <figure class="motor-list__thumbnail">
                                    <img src="<?php echo STYLEDIR; ?>/uploads/evinrude-motor.jpg" alt="evinrude-motor" />
                                </figure>
                                <div class="motor-list__content">
                                    <h2 class="motor-list__title">Evinrude<span class="motor-list__trigger"></span></h2>
                                    <div class="motor-list__description">
                                        <p>When you’re heading out deep, Evinrude E-TEC engines will get you there first, and save you money in the process. Evinrude E-TEC engines provide the torque you need to beat any competitor out of the hole and burn less fuel so you can go further and stay out longer. In fact, Evinrude E-TEC G2 engines produce up to 30% more torque and burn up to 15% less fuel than leading four-strokes. And, with a 5 year corrosion warranty, you won't have to worry about getting back either.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="btn-wrap">
                        <a href="#" class="btn btn--dark">Contact a sales representative</a>
                    </div>
                </section>
                <!-- motor end -->
            </div>
            <div>
                <!-- option start -->
                <section class="model-option">
                    <div class="container">
                        <div class="model-option__header">
                            <h2 class="model-option__title">The many options for the <strong>410 evolution</strong></h2>
                            <span>Create a checklist for the optional equipment you’re interested in.</span>
                        </div>
                        <div class="option-slider">
                            <div>
                                <h3 class="option-title">Mechanical</h3>
                                <ul class="option-list">
                                    <li class="option-list__item">Transom D-Rings</li>
                                    <li class="option-list__item">Stainless Steel Insert for Rub Rail</li>
                                    <li class="option-list__item">Bow Thruster</li>
                                    <li class="option-list__item">Underwater Hull Lighting</li>
                                    <li class="option-list__item">Windlass with 200’ of Rode/15’ Chain</li>
                                    <li class="option-list__item">SS Polished Anchor</li>
                                    <li class="option-list__item">Fresh Water Washdown for Windlass</li>
                                    <li class="option-list__item">Generator (Diesel) with Sound Shield</li>
                                </ul>
                            </div>
                            <div>
                                <h3 class="option-title">Comfort</h3>
                                <ul class="option-list">
                                    <li class="option-list__item">Transom D-Rings</li>
                                    <li class="option-list__item">Stainless Steel Insert for Rub Rail</li>
                                    <li class="option-list__item selected"><span class="option-list__thumbnail" style="background-image: url('<?php echo STYLEDIR; ?>/uploads/premium-upholstery-package.jpg');"></span>Premium Upholstery Package</li>
                                    <li class="option-list__item">Underwater Hull Lighting</li>
                                    <li class="option-list__item">Windlass with 200’ of Rode/15’ Chain</li>
                                    <li class="option-list__item">SS Polished Anchor</li>
                                    <li class="option-list__item">Fresh Water Washdown for Windlass</li>
                                    <li class="option-list__item">Generator (Diesel) with Sound Shield</li>
                                </ul>
                            </div>
                            <div>
                                <h3 class="option-title">Fishing</h3>
                                <ul class="option-list">
                                    <li class="option-list__item">Transom D-Rings</li>
                                    <li class="option-list__item">Stainless Steel Insert for Rub Rail</li>
                                    <li class="option-list__item">Bow Thruster</li>
                                    <li class="option-list__item">Underwater Hull Lighting</li>
                                    <li class="option-list__item">Windlass with 200’ of Rode/15’ Chain</li>
                                    <li class="option-list__item">SS Polished Anchor</li>
                                    <li class="option-list__item">Fresh Water Washdown for Windlass</li>
                                    <li class="option-list__item">Generator (Diesel) with Sound Shield</li>
                                </ul>
                            </div>
                            <div>
                                <h3 class="option-title">Comfort</h3>
                                <ul class="option-list">
                                    <li class="option-list__item">Transom D-Rings</li>
                                    <li class="option-list__item">Stainless Steel Insert for Rub Rail</li>
                                    <li class="option-list__item">Bow Thruster</li>
                                    <li class="option-list__item">Underwater Hull Lighting</li>
                                    <li class="option-list__item">Windlass with 200’ of Rode/15’ Chain</li>
                                    <li class="option-list__item">SS Polished Anchor</li>
                                    <li class="option-list__item">Fresh Water Washdown for Windlass</li>
                                    <li class="option-list__item">Generator (Diesel) with Sound Shield</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="btn-wrap">
                        <a class="form-toggle btn btn--dark-alt" href="#">Email This List</a>
                        <div class="form-wrap">
                            <form class="form" action="#" method="post">
                                <h3 class="form__title">Your information</h3>
                                <ul class="form-fields">
                                    <li class="form__field">
                                        <input type="text" name="txt_name" value="William Rossiter">
                                    </li>
                                    <li class="form__field">
                                        <input type="email" name="email_add" value="William Rossiter">
                                    </li>
                                    <li class="form__field">
                                        <input type="text" name="phone_no" value="555-555-5555">
                                    </li>
                                    <li class="form__field">
                                        <textarea placeholder="Questions or Comments?"></textarea>
                                    </li>
                                    <li class="form__field">
                                        <input class="button" type="submit" value="Submit">
                                    </li>
                                </ul>
                            </form>
                        </div>
                        <a href="#" class="btn btn--dark">Contact a sales representative</a>
                    </div>
                </section>
                <!-- option end -->
            </div>
        </div>
    </div>
    <section class="build-a-boat">
        <div class="step-block">
            <div class="step-block__close" data-class="build-a-boat-toggle">
                <span class="icon-close"></span>
            </div>
            <ul class="form-step">
                <li class="step__item step__item--active" data-label-back="" data-label-next="Motors">
                    Exterior
                </li>
                <li class="step__item" data-label-back="Colors" data-label-next="Options">
                    Motors
                </li>
                <li class="step__item" data-label-back="Motors" data-label-next="Finish">
                    Options
                </li>
                <li class="step__item" data-label-back=Options" data-label-next="">
                    Make it yours
                </li>
            </ul>
        </div>
        <div class="custom-hero">
            <div class="container">
                <?php echo file_get_contents(STYLEDIR . '/uploads/bab-sample.svg'); ?>
            </div>
        </div>
        <div class="step-nagivation step-nagivation--alt build-a-boat--start">
            <a href="#" class="step-prev" data-class="prev">&lt; Back to <span></span></a>
            <a href="#" class="btn btn--dark btn--large-desktop">Finish</a>
            <a href="#" class="step-next" data-class="next">Skip this step &gt;</a>
        </div>
        <div class="build-a-boat__steps">
            <div class="color-block step__item--active" data-class="step">
                <div class="container">
                    <div class="color-block__inner">
                        <div class="color-block__picker">
                            <img src="<?php echo IMAGES; ?>/color-picker.png" alt="color picker" />
                        </div>
                        <div class="color-block__option">
                            <span class="color-block__title">Select an area to color</span>
                            <ul class="area-list">
                                <li class="area-list__item">
                                    <span class="area-list__color-box" style="background: #1b1c21;"></span>
                                    <span class="area-list__title">Hull Color</span>
                                </li>
                                <li class="area-list__item">
                                    <span class="area-list__color-box"></span>
                                    <span class="area-list__title">Sheer Stripe</span>
                                </li>
                                <li class="area-list__item">
                                    <span class="area-list__color-box" style="background: #d80b02;"></span>
                                    <span class="area-list__title">Boot Stripe</span>
                                </li>
                                <li class="area-list__item">
                                    <span class="area-list__color-box"></span>
                                    <span class="area-list__title">Sheer Accent</span>
                                </li>
                                <li class="area-list__item active">
                                    <span class="area-list__color-box" style="background: #d80b02;"></span>
                                    <span class="area-list__title">Boot Accent</span>
                                </li>
                                <li class="area-list__item">
                                    <span class="area-list__color-box" style="background: #d80b02;"></span>
                                    <span class="area-list__title">Logo</span>
                                </li>
                            </ul>
                            <div class="step-nagivation step-nagivation--mobile">
                                <a href="#" class="step-next" data-class="next">Skip this step &gt;</a>
                            </div>
                            <div class="color-palette">
                                <span class="color-palette__title">
                                    Recently used colors
                                </span>
                                <ul class="color-list">
                                    <li class="color-list__item" style="background-color: #d80b02;"></li>
                                    <li class="color-list__item" style="background-color: #1b1c21;"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <a href="#" class="btn btn--dark btn--large-mobile" data-class="next">Add Motors</a>
                    </div>
                </div>
            </div>
            <div class="motor-option" data-class="step">
                <div class="container">
                    <div class="motor-option__inner">
                        <div class="motor-option__details">
                            <ul class="motor-color">
                                <li class="motor-color__item motor-color__item--white active">
                                    <span class="motor-color__title">White</span>
                                    <span class="motor-color__box"></span>
                                </li>
                                <li class="motor-color__item motor-color__item--black">
                                    <span class="motor-color__title">Black</span>
                                    <span class="motor-color__box"></span>
                                </li>
                            </ul>
                            <div class="motor-thumbnail">
                                <img src="<?php echo STYLEDIR; ?>/uploads/engine.png" alt="engine" />
                                <span class="icon-close"></span>
                            </div>
                        </div>
                        <div class="motor-option__wrap">
                            <span class="motor-option__title">Select a Motor</span>
                            <ul class="motor-option__list">
                                <li class="motor-option__list-item active">
                                    <span class="motor-option__list-title">Seven Marine</span>
                                </li>
                                <li class="motor-option__list-item">
                                    <span class="motor-option__list-title">Evinrude</span>
                                </li>
                                <li class="motor-option__list-item">
                                    <span class="motor-option__list-title">Yamaha</span>
                                </li>
                                <li class="motor-option__list-item">
                                    <span class="motor-option__list-title">Suzuki</span>
                                </li>
                                <li class="motor-option__list-item">
                                    <span class="motor-option__list-title">Mercury</span>
                                </li>
                            </ul>
                            <span class="motor-option__note">
                            * Not all engines colors shown
                        </span>
                            <div class="step-nagivation step-nagivation--mobile step-nagivation--text-center">
                                <a href="build-boat-options.html" class="step-next" data-class="next">Skip this step &gt;</a>
                            </div>
                        </div>
                        <div class="motor-option__description">
                            <h2>About Seven Marine Engines:</h2>
                            <p>Seven is an evolution in outboard engineering and customer service. At the heart of a Seven, Luxury Performance. A supercharged 6.2L V8, powerful acceleration, and more technology than ever before under a cowl, supported with concierge service. Intrepid Powerboats from the 375 to the 475 offer the opportunity to go farther and faster with twin, triple or quad 627hp and 557hp Seven’s. Personalize your power and match it to the boat with SpectraBlade LED illumination, infinite color choices</p>
                        </div>
                    </div>
                    <div class="text-center">
                        <a href="#" class="btn btn--dark btn--large-mobile" data-class="next">Select Options</a>
                    </div>
                </div>
            </div>
            <div class="model-option model-option--alt" data-class="step">
                <span class="model-option__block-title">Select a category for options</span>
                <div class="container">
                    <div class="option-slider">
                        <div>
                            <h3 class="option-title option-title--featured">Featured Options</h3>
                            <ul class="option-list">
                                <li class="option-list__item">Half-Tower Top</li>
                                <li class="option-list__item">Arch Top</li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="option-title">Mechanical</h3>
                            <ul class="option-list">
                                <li class="option-list__item">Transom D-Rings</li>
                                <li class="option-list__item">Stainless Steel Insert for Rub Rail</li>
                                <li class="option-list__item">Bow Thruster</li>
                                <li class="option-list__item">Underwater Hull Lighting</li>
                                <li class="option-list__item">Windlass with 200’ of Rode/15’ Chain</li>
                                <li class="option-list__item">SS Polished Anchor</li>
                                <li class="option-list__item">Fresh Water Washdown for Windlass</li>
                                <li class="option-list__item">Generator (Diesel) with Sound Shield</li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="option-title">Comfort</h3>
                            <ul class="option-list">
                                <li class="option-list__item">Transom D-Rings</li>
                                <li class="option-list__item">Stainless Steel Insert for Rub Rail</li>
                                <li class="option-list__item selected"><span class="option-list__thumbnail" style="background-image: url('uploads/premium-upholstery-package.jpg');"></span>Premium Upholstery Package</li>
                                <li class="option-list__item">Underwater Hull Lighting</li>
                                <li class="option-list__item">Windlass with 200’ of Rode/15’ Chain</li>
                                <li class="option-list__item">SS Polished Anchor</li>
                                <li class="option-list__item">Fresh Water Washdown for Windlass</li>
                                <li class="option-list__item">Generator (Diesel) with Sound Shield</li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="option-title">Fishing</h3>
                            <ul class="option-list">
                                <li class="option-list__item">Transom D-Rings</li>
                                <li class="option-list__item">Stainless Steel Insert for Rub Rail</li>
                                <li class="option-list__item">Bow Thruster</li>
                                <li class="option-list__item">Underwater Hull Lighting</li>
                                <li class="option-list__item">Windlass with 200’ of Rode/15’ Chain</li>
                                <li class="option-list__item">SS Polished Anchor</li>
                                <li class="option-list__item">Fresh Water Washdown for Windlass</li>
                                <li class="option-list__item">Generator (Diesel) with Sound Shield</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="step-nagivation step-nagivation--mobile step-nagivation--text-center">
                    <a href="#" class="step-next" data-class="next">Skip this step &gt;</a>
                </div>
                <div class="text-center">
                    <a href="#" class="btn btn--dark btn--large-mobile" data-class="next">Finish</a>
                </div>
            </div>
            <div class="contact-block" data-class="step">
                <div class="container">
                    <h1 class="contact-block__title">Great Design. <strong>Now Let's Make it yours</strong></h1>
                    <div class="contact-block__inner">
                        <div class="form-option">
                            <ul class="option-list">
                                <li class="option-list__item">Please email the boat I created to me and Intrepid, and have them contact me.</li>
                                <li class="option-list__item">Please only email me the boat I created.</li>
                            </ul>
                        </div>
                        <div class="form-holder">
                            <form class="form" action="#" method="post">
                                <h3 class="form__title">Your information</h3>
                                <ul class="form-fields">
                                    <li class="form__field">
                                        <input type="text" name="txt_name" placeholder="Name *">
                                    </li>
                                    <li class="form__field">
                                        <input type="email" name="email_add" placeholder="Email *">
                                    </li>
                                    <li class="form__field">
                                        <input type="text" name="phone_no" placeholder="Phone (XXX-XXX-XXXX)">
                                    </li>
                                    <li class="form__field">
                                        <textarea placeholder="Want something even more custom? Let us know here."></textarea>
                                    </li>
                                    <li class="form__field">
                                        <input class="button" type="submit" value="Submit">
                                        <span class="form__note">* Required Fields</span>
                                    </li>
                                </ul>
                            </form>
                            <span class="terms-condition">By hitting “SUBMIT” you agree to our <a href="#">TERMS OF USE.</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
<?php get_footer();
