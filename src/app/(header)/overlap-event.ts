class overlapEventType {
    private func: ((flag: boolean) => void) | undefined = undefined;
    public setFunc(func: (flag: boolean) => void) {
        this.func = func;
    }
    public emit(flag: boolean) {
        if (this.func) {
            this.func(flag);
        }
    }
}
export const overlapEvent = new overlapEventType();
