/**
 * @license
 *
 * MIT License
 *
 * Copyright (c) 2019 Richie Bendall
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/**
 * The main CloseStopper class.
 * @class
 */
export class CloseStopper {
    /**
     * The main constructor.
     * @constructor
     */
    constructor() {
        this._enabled = true;
        // If new argument not provided
        if (!(this instanceof CloseStopper))
            return new CloseStopper();
        // Throw error if window not found
        if (!window)
            throw ReferenceError("Unable to find window object.");
        // Catch beforeunload event
        window.addEventListener("beforeunload", ev => {
            if (this._enabled) {
                // Set default message
                const message = "Changes that you made may not be saved.";
                // Get event object
                const e = ev || window.event;
                // For IE and Firefox
                if (e)
                    e.returnValue = message;
                // For Safari
                return message;
            }
        });
    }
    /**
     * Whether or not closestopper will activate
     * @method
     * @param {boolean} val - The value to set
     */
    set enabled(val) {
        this._enabled = val;
    }
}
//# sourceMappingURL=index.js.map