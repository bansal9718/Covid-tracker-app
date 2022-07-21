import { CardContent } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Card } from '@material-ui/core'
import React from 'react'

function InfoBox({ title, cases, total }) {
    return (
        <Card className="infoBox">
            <CardContent>
                <Typography className="infoBox__title" color="textSecondary">{title}</Typography>

                {/* title */}
                <h2 className="infoBox__cases">{cases}</h2>
                {/* no of cases */}
                <Typography className="infoBox__total" color="textSecondary">{total} Total</Typography>
                {/* total */}

            </CardContent>

        </Card>
    )
}

export default InfoBox;
