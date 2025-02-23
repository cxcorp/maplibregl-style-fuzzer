export interface ErrorReport {
  errorStack: string;
  exampleStyle: string;
}

export class ErrorReporter {
  private reportedStacks = new Map<
    string,
    { fullStack: string; example: string }
  >();
  private reportedErrorCount: number = 0;

  public report(err: Error, exampleJson: string) {
    this.reportedErrorCount++;

    const fullStack = err.stack || "no stack";
    const stackKey = this.getDedupeKey(fullStack);

    if (this.reportedStacks.has(stackKey)) {
      if (
        exampleJson.length < this.reportedStacks.get(stackKey)!.example.length
      ) {
        // keep shortest representative example
        this.reportedStacks.set(stackKey, { example: exampleJson, fullStack });
      }
      return;
    }

    this.reportedStacks.set(stackKey, { example: exampleJson, fullStack });
  }

  public getStats(): { reportedErrorCount: number; uniqueErrors: number } {
    return {
      reportedErrorCount: this.reportedErrorCount,
      uniqueErrors: this.reportedStacks.size,
    };
  }

  public getReports(): ErrorReport[] {
    return [...this.reportedStacks.values()].map(({ example, fullStack }) => ({
      exampleStyle: example,
      errorStack: fullStack,
    }));
  }

  private getDedupeKey(errorStack: string) {
    const lines = errorStack.split("\n");
    if (
      lines[0]?.startsWith(
        "TypeError: Cannot use 'in' operator to search for 'ref' in"
      )
    ) {
      lines[0] = "TypeError: Cannot use 'in' operator to search for 'ref' in";
    }
    if (
      lines[0]?.startsWith(
        "TypeError: Cannot convert undefined or null to object"
      )
    ) {
      // 2nd line contains injected function -> remove it
      lines.splice(1, 1)
    }

    return lines.slice(0, 2).join("\n");
  }
}
