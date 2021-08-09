window.BENCHMARK_DATA = {
  "lastUpdate": 1628519294761,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "1fafbc73b2901c3b420095e4fb4f0aad6bbc16dd",
          "message": "Merge pull request #276 from TeoZosa/dependabot/pip/hypothesis-6.14.6",
          "timestamp": "2021-08-09T13:28:14Z",
          "tree_id": "f9ad9191fab855b3b3a434b6894f051dca8b99c1"
        },
        "date": 1628519292805,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14332.840209516873,
            "unit": "iter/sec",
            "range": "stddev: 0.000014696577929101664",
            "extra": "mean: 69.76984222122348 usec\nrounds: 6338"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4010077.9742481336,
            "unit": "iter/sec",
            "range": "stddev: 2.3015712125694144e-7",
            "extra": "mean: 249.37170958362213 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11648.744467930583,
            "unit": "iter/sec",
            "range": "stddev: 0.00002046770476619542",
            "extra": "mean: 85.84616159733235 usec\nrounds: 8614"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 122680.34263504321,
            "unit": "iter/sec",
            "range": "stddev: 0.000007031804157561363",
            "extra": "mean: 8.15126513768273 usec\nrounds: 39372"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14602.2414376632,
            "unit": "iter/sec",
            "range": "stddev: 0.000014508581328839317",
            "extra": "mean: 68.48263701630934 usec\nrounds: 12805"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3951896.1039266856,
            "unit": "iter/sec",
            "range": "stddev: 2.9228231639588176e-7",
            "extra": "mean: 253.04308962118864 nsec\nrounds: 178572"
          }
        ]
      }
    ]
  }
}