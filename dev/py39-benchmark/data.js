window.BENCHMARK_DATA = {
  "lastUpdate": 1630677206954,
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
          "id": "68fc65c3810feb565581ae7c59e272e445f9e5bd",
          "message": "Merge pull request #319 from TeoZosa/dependabot/pip/xdoctest-0.15.8",
          "timestamp": "2021-09-03T13:24:50Z",
          "tree_id": "f3c377b36cc8493e94e7ca1d6ca4ebc357dfa8ad"
        },
        "date": 1630677204765,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16504.909911051152,
            "unit": "iter/sec",
            "range": "stddev: 0.000024692817543195678",
            "extra": "mean: 60.58803140333607 usec\nrounds: 7133"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5047542.944531916,
            "unit": "iter/sec",
            "range": "stddev: 1.5735892589700557e-8",
            "extra": "mean: 198.11619455030248 nsec\nrounds: 11364"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14544.035062870214,
            "unit": "iter/sec",
            "range": "stddev: 0.000021039898989851958",
            "extra": "mean: 68.75670992797053 usec\nrounds: 9277"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 153006.03768498616,
            "unit": "iter/sec",
            "range": "stddev: 6.238481363417006e-7",
            "extra": "mean: 6.535689801070679 usec\nrounds: 38759"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16471.46416812598,
            "unit": "iter/sec",
            "range": "stddev: 0.000007904453622462273",
            "extra": "mean: 60.711057000937735 usec\nrounds: 6649"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5045577.783248694,
            "unit": "iter/sec",
            "range": "stddev: 1.3192505181362541e-8",
            "extra": "mean: 198.19335722459167 nsec\nrounds: 12627"
          }
        ]
      }
    ]
  }
}