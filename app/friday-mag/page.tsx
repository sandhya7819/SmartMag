"use client";

import React, { useState } from "react";
import Link from "next/link";
import FridayMagHeader from "@/components/FridayMagHeader";
import FridayMagFooter from "@/components/FridayMagFooter";
import { BarChart2, Mail, ChevronRight, Play, Music, ArrowRight, User } from "lucide-react";

// ─── DATA STRUCTURES ──────────────────────────────────────────────────────────

const heroLeft = {
  cat: "Lifestyle",
  title: "Mobile Gender Gap Increased During Pandemic, New Data Shows",
  author: "Shane Doe",
  date: "Mar 15, 2020",
  img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/attractive-young-woman-using-smart-phone-and-smili-2022-11-17-09-05-58-utc-4-768x478.jpg",
  url: "#"
};

const heroRight = {
  cat: "Decor",
  title: "Top Luxury Ideas for a High-End Home Interior Decoration",
  author: "Shane Doe",
  date: "Mar 15, 2020",
  img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/kam-idris-nylcMEgK8EQ-unsplash-2-768x884.jpg",
  url: "#"
};

const heroCards = [
  {
    title: "Epic Games Store Gives Away One of The Best VR Games",
    author: "Shane Doe",
    date: "Jan 13, 2020",
    img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/light-fun-technology-neon-woman-enjoy-headset-happy-virtual-vr_t20_zWNmJX-1-450x301.jpg",
  },
  {
    title: "The Complicated Story Behind 18000 Dead Penguin Chicks",
    author: "Shane Doe",
    date: "Jan 12, 2020",
    img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/noaa-MVa6Y2phbbI-unsplash-450x299.jpg",
  },
  {
    title: "Mobile Market to Witness Exponential Growth by 2028",
    author: "Shane Doe",
    date: "Jan 11, 2020",
    img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/freestocks-hRVrvH9-dG0-unsplash-4-450x300.jpg",
  },
  {
    title: "Travel Tips: 6 Affordable Vacation Locations In Europe",
    author: "Shane Doe",
    date: "Jan 11, 2020",
    img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/a-little-girl-outside-with-thermos-on-a-cold-winte-2021-12-28-06-00-10-utc-1-450x300.jpg",
  },
];

const latestPosts = [
  {
    cat: "Food & Diet",
    title: "What are the Top Sodium Food Sources in the United States?",
    date: "Nov 19, 2022",
    views: "237",
    excerpt: "To understand the new smart watched and other pro devices of recent focus, we should look to...",
    img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/Depositphotos_360174566_xl-2015-2-300x165.jpg",
  },
  {
    cat: "Travel",
    title: "Travel and Tourism Contribute Greatly to Europe’s Economies",
    date: "Mar 10, 2022",
    views: "104",
    excerpt: "To understand the new smart watched and other pro devices of recent focus, we should look to...",
    img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/view-of-the-dome-of-reichstag-building-seat-of-the-german-parliament-view-at-sunset-with-people_t20_Ll62z1-1-300x200.jpg",
  },
  {
    cat: "Travel",
    title: "Backpacking In Europe This Spring? Visit These 10 Budget Hotels",
    author: "Shane Doe",
    date: "Mar 10, 2022",
    views: "81",
    img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/a-young-woman-stands-against-the-backdrop-of-a-beautiful-building-with-christmas-lights-travels-in_t20_moxKYj-768x512.jpg",
    isOverlay: true
  },
  {
    cat: "Pets",
    title: "3 Reasons Why You May Want to Rethink Sleeping With Your Pet",
    date: "Mar 10, 2022",
    views: "72",
    excerpt: "To understand the new smart watched and other pro devices of recent focus, we should look to...",
    img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/happy-dog-happy-guy_t20_Kod199-300x225.jpg",
  },
  {
    cat: "Health",
    title: "What Rheumatologists Need to Know About the Management",
    date: "Mar 12, 2021",
    views: "124",
    excerpt: "To understand the new smart watched and other pro devices of recent focus, we should look to...",
    img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/chuttersnap-VIug0hNL4_A-unsplash-300x200.jpg",
    format: "gallery"
  },
  {
    cat: "Covid'19",
    title: "UK tourism: Visitor Attractions Still Suffering from Pandemic Effects",
    date: "Jan 19, 2021",
    views: "56",
    excerpt: "To understand the new smart watched and other pro devices of recent focus, we should look to...",
    img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/Depositphotos_527742458_XL-300x200.jpg",
  },
];

const mostRead = [
  {
    title: "Frequent TV Series Cancellations Altering Viewer Behavior, Survey Shows",
    date: "Sep 13, 2020",
    views: "9,700",
    img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/sports-conference-2021-09-24-03-25-56-utc-1-450x287.jpg",
  },
  {
    title: "The Top Three Scandinavian Home Décor Trends This Winter",
    date: "Sep 12, 2020",
    views: "9,246",
    img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/Depositphotos_307544172_xl-2015-1-450x253.jpg",
  },
  {
    title: "Does Drinking Coffee Help Stave Off Diabetes and Heart Disease?",
    date: "Sep 11, 2020",
    views: "8,979",
    img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/sea_-IREmctokfjU-unsplash-450x300.jpg",
    format: "video"
  },
  {
    title: "Rising Folk Singer-Songwriter to Perform at St. Joe's Amp",
    date: "Sep 10, 2020",
    views: "8,832",
    img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/obie-fernandez-uDAr4KFKY40-unsplash-1-450x282.jpg",
    format: "video"
  },
  {
    title: "How to Make Tasty Sweet with Leftover and Soggy Biscuits",
    date: "Sep 9, 2020",
    views: "8,720",
    img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/obed-hernandez-o7msSOdIGGs-unsplash-450x300.jpg",
  },
  {
    title: "Exclusive: Samsung will Launch Next Galaxy SmartTag Later This Year",
    date: "Sep 8, 2020",
    views: "8,516",
    img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/oppo-Nr88sR3i4Tg-unsplash-450x300.jpg",
  },
  {
    title: "Top Five Fitness Trends to Help You Rejuvenate Your Workouts",
    date: "Apr 18, 2020",
    views: "8,411",
    img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/michael-starkie-JRYfUyS8GDU-unsplash-450x300.jpg",
  },
];

const fitnessHero1 = {
  cat: "Food & Diet",
  title: "Boost Your Health and Fitness This Weekend with These Tips",
  author: "Shane Doe",
  date: "Jan 19, 2021",
  img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/shutterstock_390729346-1-768x512.jpg",
};

const fitnessHero2 = {
  cat: "Supplements",
  title: "Why is Nutrition Important in Overall Physical Fitness?",
  author: "Shane Doe",
  date: "Jan 18, 2021",
  img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/nathan-dumlao-kVv8rucgGtc-unsplash-1-450x675.jpg",
};

const fitnessHero3 = {
  cat: "Workout",
  title: "Top Five Fitness Trends to Help You Rejuvenate Your Health",
  author: "Shane Doe",
  date: "Jan 17, 2021",
  img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/fighting-thinker_t20_x606YX-768x511.jpg",
};

const fitnessCards = [
  { cat: "Workout", title: "Core Strength Benefits and Exercises to Improve Your Workout", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/amol-sonar-wMZx-PVUg5Y-unsplash-450x300.jpg" },
  { cat: "Supplements", title: "10 Best Foods To Increase Your Physical Fitness as You Age", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/jellybee-GpDSgnWFmwM-unsplash-2-450x298.jpg" },
  { cat: "Food & Diet", title: "Nutritionist Suggests a Healthy Way to Eat Your Meals Right for Weight Loss", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/granat-gHSKwHqTnrU-unsplash-2-450x647.jpg" },
  { cat: "Workout", title: "People are Already Using ChatGPT to Create Workout Plans", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/Depositphotos_389027836_XL-1-450x300.jpg" },
];

const healthWellbeingTop = [
  { cat: "Health", title: "Research Podcast: Long-Covid'19 Symptoms are Less Common Now than Earlier in the Pandemic", date: "Jan 15, 2021", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/Depositphotos_357938508_XL-1-450x263.jpg", format: "audio" },
  { cat: "Covid'19", title: "WHO, Advisors Urge China to Release all COVID-Related Data", date: "Jan 15, 2021", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/checking-the-temperature-at-the-entrance-to-the-beauty-salon-barber-barbershop-beauty-body_t20_kLo03K-1-450x300.jpg" },
];

const healthWellbeingBottom = [
  { cat: "Covid'19", title: "Comparison: The Maternal and Fetal Outcomes of COVID-19", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/brano-Mm1VIPqd0OA-unsplash-300x169.jpg" },
  { cat: "Covid'19", title: "Florida Surgeon General’s Covid Vaccine Claims Harm Public", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/Depositphotos_448973218_XL-1-300x204.jpg" },
  { cat: "Women Health", title: "Signs of Endometriosis: What are Common and Surprising Symptoms?", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/Depositphotos_211944860_XL-1-300x200.jpg" },
  { cat: "Mind Health", title: "How the Science of Happiness is Helping Student Mental Health", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/daab8e98059475d6254b52b440d39dc9-300x169.jpg" },
  { cat: "Heart Health", title: "Heart Health: Expert Explains The 4 Stages Of Heart Failure Treatment", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/pexels-carloscruz-artegrafia-11198236-300x200.jpg" },
  { cat: "Heart Health", title: "High Cholesterol Levels can Increase Heart Disease Risk", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/boxed-water-is-better-XXQW_4VqrA0-unsplash-300x200.jpg" },
];

const techOverlay = {
  cat: "Mobiles",
  title: "iPhone 15 Pro Max Will Make It Into The Guinness World Book!",
  author: "Shane Doe",
  date: "Jan 15, 2021",
  img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/onur-binay-yvcGXgc14rE-unsplash-450x253.jpg",
};

const techList = [
  { cat: "Tech", title: "What Early Access Video Games Reveal For Gaming Tech", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/redd-f-3mWxKnqET3E-unsplash-300x169.jpg" },
  { cat: "Gadgets", title: "These Are the Best Spots to Put Your Home Security Cameras", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/Depositphotos_314150492_xl-2015-1-300x141.jpg" },
  { cat: "Mobiles", title: "T-Mobile is buying Ryan Reynolds' Mint Mobile for up to $1.35B", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/Depositphotos_430988634_xl-2015-4-300x208.jpg" },
];

const gamingPosts = [
  { cat: "Hardware", title: "Tested Results: Default Windows VBS Setting Slows Games Up to 10%", date: "Jan 14, 2021", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/remy_loz-3vVzdb8KKIw-unsplash-450x300.jpg" },
  { cat: "Games", title: "Members Can Claim More Than A Dozen Free Games Now", date: "Jan 14, 2021", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/112151-450x281.jpg" },
  { cat: "Graphics", title: "AMD Delays Top-End Ryzen Mobile 7040HS Laptop Chips", date: "Jan 14, 2021", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/42996726655_0df7830ab6_b-1-450x253.jpg" },
  { cat: "VR", title: "The Future of Virtual Reality Gaming: What's Next for the Industry?", date: "Jan 14, 2021", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/Depositphotos_286775054_xl-2015-1-450x196.jpg" },
  { cat: "Games", title: "Next-Level Gaming: Zenith's New Trailer and PS VR2 Features", date: "Jan 14, 2021", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/262522-1-450x239.jpg" },
  { cat: "Gaming", title: "This Alienware Gaming PC with an RTX 3060 is $820 Off Right Now", date: "Jan 14, 2021", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/matias-islas-Nw0j-2YAnfI-unsplash-450x300.jpg" },
];

const featuredSlider = [
  { cat: "Celebrities", title: "Ryan Reynolds' Revelation About Having a Son as Adorable Family Life with Blake Lively is Revealed", date: "Mar 16, 2020", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2020/03/Depositphotos_268168544_xl-2015-1-450x300.jpg" },
  { cat: "Celebrities", title: "Celebrity Skin Care Rules You Can't Ignore if You Want Healthy Glowing Skin", date: "Mar 15, 2020", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2020/03/Depositphotos_159642958_XL-1-450x300.jpg" },
  { cat: "Celebrities", title: "Jeremy Renner Shares Nephew's Note Amid Snowplow Recovery: 'Very Lucky that my Uncle is Alive'", date: "Mar 15, 2020", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2020/03/Depositphotos_195972894_XL-1-450x300.jpg" },
];

const tvDramaTop = {
  cat: "Celebrities",
  title: "Behind the Scenes Look at Stacy Martin's Venice Film Festival Stunning Looks",
  date: "Jan 14, 2021",
  author: "Shane Doe",
  img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/Depositphotos_390584698_xl-2015-1-768x512.jpg",
  excerpt: "To understand the new smart watched and other pro devices of recent focus, we should look to Silicon Valley and the quantified movement of the...",
};

const tvDramaGrid = [
  { cat: "Celebrities", title: "Chris Hardwick and Lydia Hearst Welcome First Child, Daughter Dimity", date: "Jan 14, 2021", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/Depositphotos_171618968_xl-2015-1-450x344.jpg" },
  { cat: "TV", title: "Eiza Gonzalez celebrates volunteers for Women’s Day", date: "Jan 14, 2021", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/Depositphotos_354759992_XL-1-450x360.jpg" },
  { cat: "Drama", title: "Two Yellowstone Stars Weigh In on Costner Behind-the-Scene Rumors", date: "Jan 14, 2021", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/Depositphotos_152152322_xl-2015-1-450x293.jpg" },
  { cat: "Celebrities", title: "Law Roach Says He’s Not ‘Breaking Up’ with Zendaya", date: "Jan 14, 2021", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/Depositphotos_332310054_xl-2015-1-450x360.jpg" },
];

const fromLifestyle = [
  { cat: "Pets", title: "Here’s Why a Pet’s Love can Lengthen Your Life: Expert Analysis", date: "Jan 14, 2021", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/michael-hardy-hLbi5hve5Yc-unsplash-300x200.jpg" },
  { cat: "Travel", title: "Tourists are Traveling Again in Europe — But Not the Way they Used to", date: "Jan 14, 2021", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/a-little-girl-outside-with-thermos-on-a-cold-winte-2021-12-28-06-00-10-utc-1-300x200.jpg" },
  { cat: "Relations", title: "Get a Glimpse Behind the Scenes of BC’s Biggest Movie Screen", date: "Jan 14, 2021", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/Depositphotos_311418082_xl-2015-1-300x200.jpg", format: "video" },
  { cat: "Health", title: "Study Reveals that Reusable Bottles Carry More Germs than Toilet Seat", date: "Jan 13, 2021", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/lucas-vasques-9vnACvX2748-unsplash-300x200.jpg" },
  { cat: "Decor", title: "10 Stunning Home Colors | Best Interior House Colors 2023", date: "Jan 13, 2021", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/collov-home-design-5HHAP5UWFM-unsplash-300x300.jpg" },
  { cat: "Decor", title: "7 Décor Trends You Need to Know Now – 2023 Spring Décor", date: "Jan 13, 2021", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/lobacheva-ina-bK1EFdOZMlY-unsplash-211x300.jpg" },
  { cat: "Travel", title: "Trends in Hospitality – New Tourist Flows and How to Navigate", date: "Jan 13, 2021", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/viktor-bystrov-pj3Aiq9ML6o-unsplash-300x169.jpg" },
  { cat: "Relations", title: "French Philosopher Urges People to Rebel – by Making Friends", date: "Jan 13, 2021", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/matheus-ferrero-LIaLQ2SIQuk-unsplash-300x200.jpg" },
];

const trendingNow = [
  { cat: "Covid'19", title: "Spread of Corona Increases in China, Take a Look at the Report", date: "Jan 12, 2021", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/covid19_t20_QKwGza-450x300.jpg" },
  { cat: "Health", title: "Best Wrist Braces for Seniors of 2023 – Smart Health", date: "Jan 12, 2021", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/tom-claes-CfdzNybONzc-unsplash-450x300.jpg" },
  { cat: "Decor", title: "9 Home Décor Tips to Help You Deal with Anxiety", date: "Jan 12, 2021", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/X65k68_t20_GRXkRe-1-450x352.jpg" },
  { cat: "Pets", title: "5 Common Summer Health Problems In Dogs", date: "Jan 12, 2021", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/jamie-street-MoDcnVRN5JU-unsplash-1-450x338.jpg" },
  { cat: "Lifestyle", title: "50+ Magnificent Glow Tattoo Designs You'll Fall In Love With this Year", date: "Sep 20, 2020", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/joshua-rondeau-dPBlIVElN4Y-unsplash-1-450x776.jpg", format: "video" },
  { cat: "TV", title: "Superman & Lois: Too Close to Home Synopsis Released", date: "Sep 17, 2020", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/batman-697956-1-450x188.jpg" },
  { cat: "Food & Diet", title: "These 10 Tasty Dishes Aren't From Where You Think", date: "Sep 15, 2020", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/mahmoud-fawzy-sGPMqwj3N5M-unsplash-450x288.jpg", format: "video" },
  { cat: "Celebrities", title: "Ivanka Trump Tributes her Mom in ‘20s-Themed Party", date: "Sep 14, 2020", author: "Shane Doe", img: "https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/president-politics-trump-usa-united-states-trump-family-milania-trump_t20_moZX4v-450x338.jpg" },
];

// ─── CATEGORY COLORS ──────────────────────────────────────────────────────────
const categoryColors: Record<string, string> = {
  Lifestyle: "#f5ba43",
  Decor: "#8c68ff",
  "Food & Diet": "#2ab391",
  "Heart Health": "#ef2c32",
  "Covid'19": "#607d8b",
  Mobiles: "#00a2ff",
  Tech: "#00a2ff",
  Gadgets: "#00a2ff",
  Hardware: "#9c27b0",
  Games: "#ef2c32",
  Graphics: "#ff5722",
  VR: "#00bcd4",
  Workout: "#00d084",
  Supplements: "#ff9800",
  Drama: "#ef2c32",
  TV: "#ef2c32",
  Celebrities: "#e91e63",
  Pets: "#2ab391",
  Travel: "#8c68ff",
  Relations: "#ff9800",
  Health: "#00d084",
  "Women Health": "#ff69b4",
  "Mind Health": "#00ced1"
};

function getCatColor(cat: string) {
  return categoryColors[cat] || "#2ab391";
}

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function SectionHeading({ title, link, linkText, white = false }: { title: string; link?: string; linkText?: string; white?: boolean }) {
  return (
    <div className={`flex items-center gap-4 mb-6 pb-3 border-b ${white ? "border-white/10" : "border-gray-200"}`}>
      <h4
        className={`text-[20px] font-bold ${white ? "text-white" : "text-gray-900"}`}
        style={{ borderLeft: "3px solid #2ab391", paddingLeft: 12 }}
      >
        {title}
      </h4>
      {link && (
        <a href={link} className="ml-auto text-[12px] font-bold text-[#2ab391] hover:underline uppercase tracking-wider">
          {linkText || "View More"}
        </a>
      )}
    </div>
  );
}

function SectionHeadingCenter({ title, white = false }: { title: string; white?: boolean }) {
  return (
    <div className="flex flex-col items-center mb-8">
      <h4 className={`text-[24px] font-bold pb-2 relative tracking-tight ${white ? "text-white" : "text-gray-950"}`}>
        {title}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#2ab391]" />
      </h4>
    </div>
  );
}

function OverlayPost({ post, aspectClass = "aspect-[1.65/1]", titleSize = "text-[24px]" }: { post: { cat: string; title: string; author?: string; date?: string; img: string; url?: string }; aspectClass?: string; titleSize?: string }) {
  return (
    <article className={`relative overflow-hidden group cursor-pointer rounded-[6px] ${aspectClass} w-full`}>
      <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        <div className="mb-2">
          <span 
            className="inline-block text-white text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-[2px]"
            style={{ backgroundColor: getCatColor(post.cat) }}
          >
            {post.cat}
          </span>
        </div>
        <h2 className={`${titleSize} text-white font-semibold leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-3`}>
          {post.title}
        </h2>
        <div className="flex items-center gap-2 mt-2.5 text-white/70 text-[11px] font-medium">
          {post.author && <span>By {post.author} &bull; </span>}
          {post.date && <span>{post.date}</span>}
        </div>
      </div>
    </article>
  );
}

function CardPost({ post }: { post: typeof heroCards[0] }) {
  return (
    <article className="bg-white rounded-[6px] overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-all duration-300">
      <div className="aspect-[3/2] overflow-hidden relative">
        <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-[11px] text-gray-400 font-medium mb-1.5 flex-wrap">
          <span>{post.date}</span>
        </div>
        <h3 className="text-[14px] font-bold text-gray-950 leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-2">
          {post.title}
        </h3>
      </div>
    </article>
  );
}

function ListPost({ post }: { post: { cat: string; title: string; img: string; date?: string; views?: string; excerpt?: string; format?: string } }) {
  const isVideo = post.format === "video" || post.format === "audio" || post.format === "gallery";
  return (
    <article className="flex gap-4 md:gap-5 group cursor-pointer py-4.5 border-b border-gray-100 last:border-0 items-center">
      <div className="flex-shrink-0 rounded-[6px] overflow-hidden relative w-[130px] sm:w-[160px] aspect-[4/3]">
        <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        {isVideo && (
          <span className="absolute inset-0 m-auto w-8 h-8 rounded-full bg-black/60 backdrop-blur-xs flex items-center justify-center text-white">
            {post.format === "audio" ? <Music size={14} /> : <Play size={14} className="ml-0.5" />}
          </span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 text-[11px] text-gray-400 font-medium mb-1.5 flex-wrap">
          <span className="font-extrabold uppercase tracking-wider" style={{ color: getCatColor(post.cat) }}>{post.cat}</span>
          {post.date && (
            <>
              <span>&bull;</span>
              <span>{post.date}</span>
            </>
          )}
          {post.views && (
            <>
              <span>&bull;</span>
              <BarChart2 size={12} className="inline" />
              <span>{post.views} Views</span>
            </>
          )}
        </div>
        <h3 className="text-[17px] font-bold text-gray-900 leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-2">
          {post.title}
        </h3>
        {post.excerpt && <p className="text-gray-500 text-[13px] mt-2 line-clamp-2 leading-relaxed hidden sm:block">{post.excerpt}</p>}
      </div>
    </article>
  );
}

function MostReadPost({ post, index }: { post: typeof mostRead[0]; index: number }) {
  const hasPlay = post.format === "video";
  return (
    <article className="flex gap-3 group cursor-pointer py-3.5 border-b border-gray-200/60 last:border-0 items-start">
      <div className="flex-shrink-0 rounded-[6px] overflow-hidden relative w-[85px] aspect-[4/3]">
        <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        {hasPlay && (
          <span className="absolute inset-0 m-auto w-6 h-6 rounded-full bg-black/60 flex items-center justify-center text-white">
            <Play size={10} className="ml-0.5" />
          </span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 text-[11px] text-gray-500 mb-1">
          <span>{post.date}</span>
          <span>&bull;</span>
          <BarChart2 size={12} className="inline" />
          <span>{post.views}</span>
        </div>
        <h3 className="text-[13.5px] font-bold text-gray-900 leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-2">
          {post.title}
        </h3>
      </div>
    </article>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function FridayMagPage() {
  const [featuredIdx, setFeaturedIdx] = useState(0);
  const [lifestyleFilter, setLifestyleFilter] = useState("All");

  const filteredLifestylePosts = fromLifestyle.filter((post) => {
    if (lifestyleFilter === "All") return true;
    if (lifestyleFilter === "Technology") return post.cat === "Tech" || post.cat === "Mobiles" || post.cat === "Hardware" || post.cat === "Games" || post.cat === "Graphics" || post.cat === "VR";
    if (lifestyleFilter === "Lifestyle") return post.cat === "Pets" || post.cat === "Travel" || post.cat === "Relations" || post.cat === "Decor" || post.cat === "Health";
    return true;
  });

  return (
    <main className="min-h-screen bg-[#fcfcfc] text-[14px]" style={{ fontFamily: "'Public Sans', system-ui, sans-serif" }}>
      <FridayMagHeader />

      {/* Explore Banner Ad top */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-[35px] mt-[30px] flex justify-center">
        <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener noreferrer" className="block hover:opacity-90 transition-opacity">
          <img
            src="https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/FridayMag-top.jpg"
            alt="Explore Banner Ad"
            width={970}
            height={125}
            className="w-full max-w-[970px] h-auto object-cover rounded-sm shadow-xs"
          />
        </a>
      </div>

      {/* ── SECTION 1: Hero (2 overlays + 4 cards) ── */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-[35px] mt-[30px] mb-[45px]">
        {/* Top: 2-col overlay heroes */}
        <div className="flex flex-col lg:flex-row mb-[14px] gap-[14px]">
          <div className="w-full lg:w-[65%] shrink-0">
            <OverlayPost post={heroLeft} aspectClass="aspect-[1.65/1]" titleSize="text-[20px] sm:text-[28px] md:text-[32px]" />
          </div>
          <div className="w-full lg:w-[35%] shrink-0">
            <OverlayPost post={heroRight} aspectClass="aspect-[0.86/1]" titleSize="text-[18px] sm:text-[22px] md:text-[24px]" />
          </div>
        </div>

        {/* Bottom: 4 card posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[14px]">
          {heroCards.map((card, i) => (
            <CardPost key={i} post={card} />
          ))}
        </div>
      </section>

      {/* ── SECTION 2: Latest Posts + Most Read ── */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-[35px] mb-[50px] w-full">
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          
          {/* Left: Latest Posts list */}
          <div className="w-full lg:w-[67%] shrink-0">
            <SectionHeading title="Latest Posts" link="#" linkText="View More" />
            <div className="flex flex-col gap-1">
              {latestPosts.map((post, i) => {
                if (post.isOverlay) {
                  return (
                    <div key={i} className="py-5 border-b border-gray-100 last:border-0">
                      <OverlayPost post={post as any} aspectClass="aspect-[1.95/1]" titleSize="text-[18px] sm:text-[24px] md:text-[26px]" />
                    </div>
                  );
                }
                return <ListPost key={i} post={post} />;
              })}
            </div>
            
            <button className="mt-8 w-full py-3.5 border border-gray-200 text-[12px] font-extrabold uppercase tracking-widest text-gray-500 hover:bg-[#2ab391] hover:text-white hover:border-[#2ab391] transition-all duration-300 flex items-center justify-center gap-2 rounded-[4px]">
              Load More <ChevronRight size={14} />
            </button>
          </div>

          {/* Right: Most Read box */}
          <div className="w-full lg:w-[33%] shrink-0">
            <div className="sticky top-6">
              <div className="bg-[#f0f0f0] rounded-[6px] border border-gray-200/50 p-5 md:p-6">
                <SectionHeading title="Most Read" />
                <div className="flex flex-col gap-1.5">
                  {mostRead.map((post, i) => (
                    <MostReadPost key={i} post={post} index={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Physical Fitness (dark background) ── */}
      <section
        className="mb-[55px] bg-[#0A0F15] py-12 text-white overflow-hidden"
        style={{ background: "linear-gradient(180deg, #0A0F15 35%, #151b24 35%)" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-[35px]">
          <SectionHeadingCenter title="Physical Fitness" white />

          {/* Top row: visual order 25% | 50% | 25% */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[14px] mb-[20px]">
            
            {/* Col 1 (25%): portrait overlay */}
            <div className="md:col-span-1">
              <article className="relative rounded-[6px] overflow-hidden group cursor-pointer bg-black/50 aspect-[0.7/1] h-full flex flex-col justify-end">
                <div className="absolute inset-0">
                  <img src={fitnessHero2.img} alt={fitnessHero2.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                </div>
                <div className="relative p-5 z-10">
                  <span 
                    className="inline-block text-white text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 mb-2.5 rounded-[2px]"
                    style={{ backgroundColor: getCatColor(fitnessHero2.cat) }}
                  >
                    {fitnessHero2.cat}
                  </span>
                  <h3 className="text-white text-[16px] font-bold leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-4">{fitnessHero2.title}</h3>
                  <div className="text-white/60 text-[11px] mt-2 font-medium">By {fitnessHero2.author}</div>
                </div>
              </article>
            </div>

            {/* Col 2 (50%): large card */}
            <div className="md:col-span-2">
              <article className="rounded-[6px] overflow-hidden group cursor-pointer bg-[#020202] border border-white/5 h-full flex flex-col justify-between">
                <div className="aspect-[1.6/1] overflow-hidden relative">
                  <img src={fitnessHero1.img} alt={fitnessHero1.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span 
                    className="absolute bottom-3 left-4 inline-block text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-[2px]"
                    style={{ backgroundColor: getCatColor(fitnessHero1.cat) }}
                  >
                    {fitnessHero1.cat}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-center">
                  <h3 className="text-white text-[20px] md:text-[23px] font-bold leading-snug group-hover:text-[#2ab391] transition-colors">{fitnessHero1.title}</h3>
                  <div className="text-white/50 text-[11px] mt-2.5 font-medium">By {fitnessHero1.author} &bull; {fitnessHero1.date}</div>
                </div>
              </article>
            </div>

            {/* Col 3 (25%): portrait overlay */}
            <div className="md:col-span-1">
              <article className="relative rounded-[6px] overflow-hidden group cursor-pointer bg-black/50 aspect-[0.7/1] h-full flex flex-col justify-end">
                <div className="absolute inset-0">
                  <img src={fitnessHero3.img} alt={fitnessHero3.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                </div>
                <div className="relative p-5 z-10">
                  <span 
                    className="inline-block text-white text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 mb-2.5 rounded-[2px]"
                    style={{ backgroundColor: getCatColor(fitnessHero3.cat) }}
                  >
                    {fitnessHero3.cat}
                  </span>
                  <h3 className="text-white text-[16px] font-bold leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-4">{fitnessHero3.title}</h3>
                  <div className="text-white/60 text-[11px] mt-2 font-medium">By {fitnessHero3.author}</div>
                </div>
              </article>
            </div>

          </div>

          {/* Bottom 4 landscape items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[14px]">
            {fitnessCards.map((card, i) => (
              <article key={i} className="relative rounded-[6px] overflow-hidden group cursor-pointer bg-black/45 aspect-[1.3/1]">
                <div className="absolute inset-0">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span 
                    className="inline-block text-white text-[8px] font-extrabold uppercase tracking-widest px-1.5 py-0.5 mb-1.5 rounded-[1.5px]"
                    style={{ backgroundColor: getCatColor(card.cat) }}
                  >
                    {card.cat}
                  </span>
                  <h4 className="text-white text-[12px] font-bold leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-2">{card.title}</h4>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 4: Health & Well-Being ── */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-[35px] mb-[45px]">
        <SectionHeading title="Health & Well-Being" />
        
        {/* Top 2 columns grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {healthWellbeingTop.map((post, i) => (
            <article key={i} className="bg-white rounded-[6px] border border-gray-150 overflow-hidden group cursor-pointer shadow-xs">
              <div className="aspect-[1.95/1] overflow-hidden relative">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                {post.format === "audio" && (
                  <span className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-black/60 flex items-center justify-center text-white backdrop-blur-xs">
                    <Music size={16} />
                  </span>
                )}
                <span 
                  className="absolute bottom-3 left-4 inline-block text-white text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-[2px]"
                  style={{ backgroundColor: getCatColor(post.cat) }}
                >
                  {post.cat}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-gray-900 text-[18px] font-bold leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <div className="text-gray-400 text-[11px] mt-2 font-medium">By {post.author} &bull; {post.date}</div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom 2 columns list cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {healthWellbeingBottom.map((post, i) => (
            <article key={i} className="flex gap-4 group cursor-pointer py-3 border-b border-gray-100 last:border-0 items-center">
              <div className="flex-shrink-0 rounded-[6px] overflow-hidden w-[95px] aspect-[4/3]">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex-1 min-w-0">
                <span 
                  className="text-[11px] font-extrabold uppercase tracking-wider block mb-0.5"
                  style={{ color: getCatColor(post.cat) }}
                >
                  {post.cat}
                </span>
                <h3 className="text-gray-900 text-[14.5px] font-bold leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Banner Ad Middle */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-[35px] mb-[45px] flex justify-center">
        <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener noreferrer" className="block hover:opacity-90 transition-opacity">
          <img
            src="https://smartmag.theme-sphere.com/blogger/wp-content/uploads/sites/31/2022/10/Top-Mid.jpg"
            alt="Banner Ad Middle"
            width={728}
            height={90}
            className="w-full max-w-[728px] h-auto object-cover rounded-sm shadow-xs"
          />
        </a>
      </div>

      {/* ── SECTION 5: Technology ── */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-[35px] mb-[50px]">
        <SectionHeading title="Technology" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          
          {/* Left Column: 50% overlay */}
          <div className="lg:sticky lg:top-6">
            <OverlayPost post={techOverlay} aspectClass="aspect-[1.12/1]" titleSize="text-[18px] sm:text-[23px] md:text-[25px]" />
          </div>

          {/* Right Column: 50% list */}
          <div className="flex flex-col gap-1">
            {techList.map((post, i) => (
              <ListPost key={i} post={post} />
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 6: Gaming ── */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-[35px] mb-[50px] w-full">
        <div className="flex flex-col lg:flex-row gap-8 items-start w-full">
          
          {/* Left: Gaming Cards Grid (2/3 width) */}
          <div className="w-full lg:w-[67%] shrink-0">
            <SectionHeading title="Gaming" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {gamingPosts.map((post, i) => (
                <article key={i} className="group cursor-pointer">
                  <div className="overflow-hidden rounded-[6px] mb-2.5 aspect-[3/2] relative bg-gray-100">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span 
                    className="text-[10px] font-extrabold uppercase tracking-wider block mb-1"
                    style={{ color: getCatColor(post.cat) }}
                  >
                    {post.cat}
                  </span>
                  <h3 className="text-gray-900 text-[14.5px] font-bold leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-2 mb-1.5">
                    {post.title}
                  </h3>
                  <div className="text-gray-400 text-[11px] font-medium">{post.date} &bull; By {post.author}</div>
                </article>
              ))}
            </div>
          </div>

          {/* Right: Sidebar widgets (1/3 width) */}
          <div className="w-full lg:w-[33%] shrink-0 space-y-8">
            
            {/* Newsletter widget */}
            <div className="border border-gray-250/60 rounded-[6px] text-center bg-gray-50/50 p-6 shadow-xs relative">
              <div className="w-10 h-10 rounded-full bg-[#2ab391]/10 flex items-center justify-center mx-auto mb-3">
                <Mail size={18} className="text-[#2ab391]" />
              </div>
              <h3 className="text-[20px] font-bold text-gray-900 mb-1.5">Subscribe to Updates</h3>
              <p className="text-gray-500 text-[13px] mb-4.5 leading-relaxed font-medium">Get the latest creative news from FooBar about art, design and business.</p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email address.."
                  className="w-full border border-gray-250 px-3.5 py-2.5 text-[13px] focus:outline-none focus:border-[#2ab391] transition-colors rounded-[4px] bg-white text-gray-800"
                />
                <button className="w-full bg-[#2ab391] text-white py-2.5 text-[12px] font-bold uppercase tracking-wider hover:bg-[#1d8a6f] transition-colors rounded-[3px]">
                  Subscribe
                </button>
              </form>
              <p className="text-gray-400 text-[10px] mt-3 leading-normal">By signing up, you agree to our terms and our <a href="#" className="underline hover:text-[#2ab391]">Privacy Policy</a> agreement.</p>
            </div>

            {/* Featured Slider */}
            <div>
              <SectionHeading title="Featured" />
              <article className="group cursor-pointer relative">
                <div className="overflow-hidden rounded-[6px] mb-3.5 aspect-[4/3]">
                  <img
                    src={featuredSlider[featuredIdx].img}
                    alt={featuredSlider[featuredIdx].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <span 
                  className="text-[11px] font-extrabold uppercase tracking-wider block mb-1"
                  style={{ color: getCatColor(featuredSlider[featuredIdx].cat) }}
                >
                  {featuredSlider[featuredIdx].cat}
                </span>
                <h3 className="text-[16px] font-bold text-gray-900 leading-snug group-hover:text-[#2ab391] transition-colors mb-1.5">
                  {featuredSlider[featuredIdx].title}
                </h3>
                <div className="text-gray-400 text-[11px] font-medium">{featuredSlider[featuredIdx].date} &bull; By {featuredSlider[featuredIdx].author}</div>
              </article>
              
              <div className="flex items-center gap-1.5 mt-4">
                {featuredSlider.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setFeaturedIdx(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${i === featuredIdx ? "bg-[#2ab391]" : "bg-gray-200 hover:bg-gray-400"}`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 7: TV & Drama (Dark gradient theme) ── */}
      <section
        className="mb-[50px] bg-[#0A0F14] py-12 text-white"
        style={{ background: "linear-gradient(180deg, #0A0F14 20%, #151b24 20%)" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-[35px]">
          
          <div className="flex items-center gap-4 mb-8 pb-3 border-b border-white/10">
            <h4 className="text-[20px] font-bold text-white" style={{ borderLeft: "3px solid #2ab391", paddingLeft: 12 }}>
              TV &amp; Drama
            </h4>
            <a href="#" className="ml-auto text-[11px] font-bold text-[#2ab391] hover:underline uppercase tracking-wider">
              More from TV &amp; Drama
            </a>
          </div>

          {/* Large list card at top */}
          <article className="group cursor-pointer bg-[#172029] rounded-[6px] border border-white/5 overflow-hidden flex flex-col md:flex-row mb-6 items-center">
            <div className="flex-shrink-0 overflow-hidden w-full md:w-[50%] aspect-[1.5/1]">
              <img src={tvDramaTop.img} alt={tvDramaTop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6 md:p-8 flex-1">
              <span 
                className="text-[10px] font-extrabold uppercase tracking-wider block mb-2"
                style={{ color: getCatColor(tvDramaTop.cat) }}
              >
                {tvDramaTop.cat}
              </span>
              <h2 className="text-white text-[20px] md:text-[24px] font-bold leading-snug group-hover:text-[#2ab391] transition-colors mb-3">
                {tvDramaTop.title}
              </h2>
              <p className="text-white/60 text-[13px] leading-relaxed mb-4 line-clamp-3 font-medium">
                {tvDramaTop.excerpt}
              </p>
              <div className="text-white/40 text-[11px] font-medium">{tvDramaTop.date} &bull; By {tvDramaTop.author}</div>
            </div>
          </article>

          {/* 4 small card posts below */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {tvDramaGrid.map((post, i) => (
              <article key={i} className="bg-[#172029]/40 border border-white/5 rounded-[6px] overflow-hidden group cursor-pointer">
                <div className="aspect-[3/2] overflow-hidden relative">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <span 
                    className="text-[9px] font-extrabold uppercase tracking-wider block mb-1"
                    style={{ color: getCatColor(post.cat) }}
                  >
                    {post.cat}
                  </span>
                  <h3 className="text-[13.5px] font-bold text-white/90 leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-2 h-[38px]">
                    {post.title}
                  </h3>
                  <div className="text-white/40 text-[10px] mt-2 font-medium">{post.date}</div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Banner Ad Footer top */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-[35px] mb-[45px] flex justify-center">
        <a href="https://theme-sphere.com/buy/go.php?theme=smartmag" target="_blank" rel="noopener noreferrer" className="block hover:opacity-90 transition-opacity">
          <img
            src="https://smartmag.theme-sphere.com/friday-mag/wp-content/uploads/sites/36/2023/03/FridayMag-top.jpg"
            alt="Explore Banner Ad Footer"
            width={970}
            height={125}
            className="w-full max-w-[970px] h-auto object-cover rounded-sm shadow-xs"
          />
        </a>
      </div>

      {/* ── SECTION 8: From Lifestyle (grid of 8 with tabs) ── */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-[35px] mb-[50px]">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-3 border-b border-gray-200">
          <h4 className="text-[20px] font-bold text-gray-900" style={{ borderLeft: "3px solid #2ab391", paddingLeft: 12 }}>
            From Lifestyle
          </h4>
          <div className="flex items-center gap-1">
            {["All", "Technology", "Lifestyle"].map((tab) => (
              <button
                key={tab}
                onClick={() => setLifestyleFilter(tab)}
                className={`px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider rounded-sm transition-all ${
                  lifestyleFilter === tab
                    ? "bg-[#2ab391] text-white"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 2-col list loop grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {filteredLifestylePosts.map((post, i) => (
            <article key={i} className="flex gap-4 group cursor-pointer py-3 border-b border-gray-100 last:border-0 items-center">
              <div className="flex-shrink-0 rounded-[6px] overflow-hidden relative w-[100px] sm:w-[130px] aspect-[1.4/1]">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {post.format === "video" && (
                  <span className="absolute inset-0 m-auto w-7 h-7 rounded-full bg-black/60 flex items-center justify-center text-white">
                    <Play size={10} className="ml-0.5" />
                  </span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <span 
                  className="text-[11px] font-extrabold uppercase tracking-wider block mb-0.5"
                  style={{ color: getCatColor(post.cat) }}
                >
                  {post.cat}
                </span>
                <h3 className="text-gray-900 text-[14.5px] font-bold leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <div className="text-gray-400 text-[11px] mt-1.5 font-medium">{post.date} &bull; By {post.author}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── SECTION 9: Trending Now (grid of 8 with ranking counters) ── */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-[35px] mb-[65px]">
        <SectionHeading title="Trending Now" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {trendingNow.map((post, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="overflow-hidden rounded-[6px] mb-3 aspect-[3/2] relative bg-gray-100">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                
                {/* Huge ranking number */}
                <div className="absolute top-2.5 left-2.5 w-7 h-7 rounded-[4px] bg-[#0A0F15]/80 backdrop-blur-xs flex items-center justify-center border border-white/10 text-white font-extrabold text-[12px]">
                  {i + 1}
                </div>

                {post.format === "video" && (
                  <span className="absolute inset-0 m-auto w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white">
                    <Play size={12} className="ml-0.5" />
                  </span>
                )}
              </div>
              <h3 className="text-gray-900 text-[14.5px] font-bold leading-snug group-hover:text-[#2ab391] transition-colors line-clamp-2 h-[38px] mb-1.5">
                {post.title}
              </h3>
              <div className="text-gray-400 text-[11px] font-medium">{post.date} &bull; By {post.author}</div>
            </article>
          ))}
        </div>
      </section>

      <FridayMagFooter />
    </main>
  );
}
