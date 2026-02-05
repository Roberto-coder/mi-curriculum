import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Vector3 } from 'three';

export const useAntigravity = (intensity: number = 1, speed: number = 1) => {
    const ref = useRef<Group>(null);
    const time = useRef(Math.random() * 100); // Random offset

    useFrame((state) => {
        if (ref.current) {
            time.current += 0.01 * speed;
            const floatY = Math.sin(time.current) * 0.5 * intensity;
            const floatRot = Math.cos(time.current * 0.5) * 0.05 * intensity;

            ref.current.position.y += (floatY - ref.current.position.y) * 0.1;
            ref.current.rotation.z = floatRot;
            ref.current.rotation.x = floatRot * 0.5;
        }
    });

    return ref;
};
