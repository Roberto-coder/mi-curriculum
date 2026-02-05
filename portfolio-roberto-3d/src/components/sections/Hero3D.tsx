'use client';

import AvatarScene from '../3d/AvatarScene';
import BackgroundParticles from '../3d/BackgroundParticles';
import { Text, Float } from '@react-three/drei';

export default function Hero3D() {
    return (
        <group>
            <BackgroundParticles count={2000} />

            {/* Main Character */}
            <group position={[0, -1, 0]}>
                <AvatarScene />
            </group>

            {/* Floating 3D Text Behind */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <Text
                    position={[0, 1, -2]}
                    fontSize={1.5}
                    color="#333"
                    maxWidth={10}
                    textAlign="center"
                    font="/fonts/Inter-Bold.woff" // Ensure this font exists or use default
                    anchorX="center"
                    anchorY="middle"
                >
                    FULL STACK
                </Text>
            </Float>
        </group>
    );
}
