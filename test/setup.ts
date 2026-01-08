import { afterEach, vi } from "vitest";
import {cleanup} from '@testing-library/React';
import '@testing-library/jest-dom';

afterEach( ()=> {
    cleanup();
    vi.clearAllMocks()
});