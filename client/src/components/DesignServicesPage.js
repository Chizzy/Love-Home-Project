import React, {Component} from 'react';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';

class DesignServicesPage extends Component {
    render() {
        return (
            <PricingTable highlightColor='#398274'>
                <PricingSlot highlighted onClick={this.submit} buttonText='SIGN UP' title='Love Home Basic'
                             priceText='$59/room'>
                    <PricingDetail> <b>✓</b> Love Home builds your room in 3D</PricingDetail>
                    <PricingDetail> <b>✓</b> Shop directly from your designs in one cart</PricingDetail>
                    <PricingDetail> <b>✓</b> Unlimited revisions: Send feedback to the Love Home team</PricingDetail>
                    <PricingDetail> <b>✓</b> Designs delivered in 10-14 days</PricingDetail>
                </PricingSlot>
                <PricingSlot highlighted onClick={this.submit} buttonText='SIGN UP' title='Love Home Plus' priceText='$79/room'>
                    <PricingDetail> <b>✓</b> Love Home builds your room in 3D</PricingDetail>
                    <PricingDetail> <b>✓</b> Concierge shopping service</PricingDetail>
                    <PricingDetail> <b>✓</b> Designs delivered in 7-10 days</PricingDetail>
                    <PricingDetail> <b>✓</b><b> Exclusive Discounts:</b> Access to exclusive discounts and shopping
                        perks</PricingDetail>
                </PricingSlot>
                <PricingSlot highlighted onClick={this.submit} buttonText='SIGN UP' title='Love Home Premium'
                             priceText='$169/room'>
                    <PricingDetail> <b>✓</b> Love Home builds your room in 3D</PricingDetail>
                    <PricingDetail> <b>✓</b> Concierge shopping service</PricingDetail>
                    <PricingDetail> <b>✓</b> Designs delivered in 7-10 days</PricingDetail>
                    <PricingDetail> <b>✓</b><b> Exclusive Discounts:</b> Access to exclusive discounts and shopping
                        perks</PricingDetail>
                    <PricingDetail> <b>✓</b> 1:1 sessions with your dedicated Love Home designer</PricingDetail>
                    <PricingDetail> <b>✓</b> Ongoing support to fine-tune your designs</PricingDetail>
                </PricingSlot>
            </PricingTable>
        );
    }
}

export default DesignServicesPage;