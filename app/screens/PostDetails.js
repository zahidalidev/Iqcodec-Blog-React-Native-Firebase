import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, Platform, Dimensions } from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview'
import { RFPercentage } from 'react-native-responsive-fontsize';

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const htmlTemp = '<p>Are you looking for how to create working virtual credit cards for free trails on Netflix or other services ? If that the case, this video is a solution to your problem. This blog post is going to show you how to create unlimited working credit cards for Free trials Online on any service of your choice. </p> <p class="has-large-font-size"><strong>What is a virtual credit card?</strong></p> <p class="has-text-color" style="color:#ee0824"><strong>In a Nutshell</strong>,</p> <p class="has-black-color has-text-color"> <em>You can acquire a unique, virtual credit card number that is linked to your main credit card account from several credit card issuers. When shopping online or over the phone, or in the event of a large data breach, using a virtual credit card may help protect you against fraud.</em></p> <p>Virtual credit cards are one-of-a-kind credit card numbers that let you use your principal credit card account to make transactions without having to use — or expose — your primary credit card account number. You can limit the use of a virtual credit card number to a specific merchant. A virtual credit card may also allow you to set a spending restriction or an expiration date.</p> <p>A virtual credit card number&#8217;s issuer may allow you to lock or erase a virtual account number. This protects you against fraudulent purchases while keeping your main credit card account safe. You can then generate a new virtual account number to continue shopping with that business. </p> <p>In a world where data breaches are a sad reality, all of this provides you some ability to try to protect your main credit card account information.</p> <p class="has-large-font-size"><strong>Benefits of virtual credit cards</strong></p> <p>The possibility to close an account is the key advantage of virtual credit cards. You&#8217;ll have to get your main credit card account number reissued if your main account number is revealed in a data breach since you didn&#8217;t utilize a virtual credit card. You&#8217;ll obtain a new account number as a result of this. Regrettably, this may cause problems with any vendors with whom you&#8217;ve set up recurring payments using your old card number.</p> <p>The virtual credit card feature, on the other hand, allows you to keep your primary credit card account active. At the same time, closing the virtual card reduces the chance that your primary account may be compromised in a data breach. It also saves you the trouble of finding and correcting your recurring payments with companies who aren&#8217;t affected by the incident.</p> <p>A virtual credit card might also assist you in focusing on minimizing your expenditure with specific retailers. You may be able to set up a virtual account number with the spending limit you want, depending on your card issuer. You won&#8217;t be allowed to make any further charges with that account number once you&#8217;ve reached that limit.</p> <p class="has-large-font-size"><strong>Downsides of virtual credit cards</strong></p> <p>With virtual credit cards, returning products ordered online to a physical store could be difficult. To process your refund back to your card, some stores need you to input or swipe the card you used to make the purchase. The amount of time it takes for a refund to appear on your credit card varies depending on the merchant and the card issuer.</p> <p>With a virtual credit card, this is obviously not possible. You may have to accept a store gift card instead of getting your money returned on your credit card in these situations.</p> <p>Subscriptions may be affected by virtual credit cards with limited expiration dates. You&#8217;ll need to change the virtual payment card number every time it expires to keep your subscription valid. Your membership may be interrupted if you forget.</p> <p style="font-size:25px"><strong>Bottom line</strong></p> <p>When making purchases online or over the phone, virtual credit cards may provide some peace of mind. If your virtual credit card number is compromised, you can usually delete or lock it with a single click and continue to use your primary credit card.</p> <p>However, obtaining virtual credit card numbers can be a minor inconvenience — and credit card issuers that offer virtual credit cards may also have $0 fraud liability policies.</p> <p>If the thought of being caught in a data breach — and having to close a main account number with a bunch of recurring payments tied to it — makes you shudder, you&#8217;ll enjoy the added layer of security virtual credit cards are supposed to provide.</p> <hr class="wp-block-separator"/> <figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper"> <iframe loading="lazy" title="Create Unlimited Virtual Credit Cards For Free Trials Online" width="696" height="392" src="https://www.youtube.com/embed/HhHEGj1jtSQ?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div></figure> <p>👉👉 For those of you wanting to use this virtual card for Netflix, you would need to use a good VPN before entering the credit card details into Netflix to activate the 30 Days Free Trails and for other service the card would work with no issue. The video below is going to you can easily create your own virtual credit card now to start using Netflix for free</p> <p>Important Links: Website Used in the video above</p> <ul><li>Website to create your virtual credit card: <a href="https://bit.ly/3x6wmwI" target="_blank" rel="noreferrer noopener">Click Hear</a> </li><li>For temporal Mails: <a href="https://bit.ly/2UUeeci">Click Here</a></li></ul> <div style="text-align:left" class="yasr-auto-insert-visitor"></div>';
// const htmlTemp = '<p>With a minor modification in the settings, you can control who can add you to WhatsApp groups. WhatsApp groups are a terrific way to remain in touch with family, friends, and even coworkers, but many individuals abuse the ability to create massive groups in order to sell things or advertise services. These organizations are frequently [&hellip;]</p>';

function PostDetails(props) {
    const source = {
        html: htmlTemp.replace(/<a/ig, '<a target=\"_blank\"')
    };

    return (
        <AutoHeightWebView style={{ width: "90%", marginTop: 35, marginLeft: "5%" }}
            // customScript={`document.body.style.background = 'lightyellow';`}
            customStyle={`
                p {
                font-size: 16px;
                }
                iframe {
                    width: 120%;
                    height: 200px;
                    margin-left: ${RFPercentage(-3.5)}px
                }
            `}
            allowsFullscreenVideo={true}
            onSizeUpdated={size => console.log(size.height)}
            files={[{
                href: 'cssfileaddress',
                type: 'text/css',
                rel: 'stylesheet'
            }]}
            source={source}
            scalesPageToFit={true}
            viewportContent={'width=device-width, user-scalable=no'}
        />
    );
}

export default PostDetails;