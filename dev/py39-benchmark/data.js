window.BENCHMARK_DATA = {
  "lastUpdate": 1629207762682,
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
          "id": "b669698d5cebab9eab4a0ac5c0b0f925f4b342fc",
          "message": "Merge pull request #286 from TeoZosa/dependabot/pip/hypothesis-6.14.8",
          "timestamp": "2021-08-17T13:25:36Z",
          "tree_id": "94245a80b7bbc4816585becef5b5ab2f379e4b87"
        },
        "date": 1629207760453,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14682.340006654666,
            "unit": "iter/sec",
            "range": "stddev: 0.000053267290349177105",
            "extra": "mean: 68.10903436010588 usec\nrounds: 12078"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4688679.4896909185,
            "unit": "iter/sec",
            "range": "stddev: 2.65829589426137e-7",
            "extra": "mean: 213.2796669509779 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12726.436094913137,
            "unit": "iter/sec",
            "range": "stddev: 0.000017355623887941847",
            "extra": "mean: 78.57659383522999 usec\nrounds: 7364"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 133031.55595126914,
            "unit": "iter/sec",
            "range": "stddev: 0.000007434751511910699",
            "extra": "mean: 7.517013484878057 usec\nrounds: 39526"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14826.02184775114,
            "unit": "iter/sec",
            "range": "stddev: 0.00003620128313081683",
            "extra": "mean: 67.44897655413097 usec\nrounds: 9426"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4717173.997733192,
            "unit": "iter/sec",
            "range": "stddev: 1.8270018845595602e-7",
            "extra": "mean: 211.99133220010017 nsec\nrounds: 178572"
          }
        ]
      }
    ]
  }
}