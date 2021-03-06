import React from 'react';
import * as Styles from '../../styles/components/badgeStyles';

const Badge: React.FC = () => {
    return (
        <Styles.Container>
            <Styles.Badge>
                <Styles.TextBadge>
                    OU
                </Styles.TextBadge>
            </Styles.Badge>
            <Styles.Line />
        </Styles.Container>
    );
}

export default Badge;
