window.BENCHMARK_DATA = {
  "lastUpdate": 1629730396369,
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
          "id": "819e0d92acb581eedd86339ad9925da30068ace1",
          "message": "Merge pull request #298 from TeoZosa/dependabot/pip/hypothesis-6.15.0",
          "timestamp": "2021-08-23T14:21:57Z",
          "tree_id": "21af921e364e178567aff8e4edd9a0ede6623741"
        },
        "date": 1629730394438,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15499.853945756659,
            "unit": "iter/sec",
            "range": "stddev: 0.00003547796657637896",
            "extra": "mean: 64.51673696407742 usec\nrounds: 12485"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3920659.855538977,
            "unit": "iter/sec",
            "range": "stddev: 6.669682658926252e-7",
            "extra": "mean: 255.05910659062368 nsec\nrounds: 144928"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11691.413831900174,
            "unit": "iter/sec",
            "range": "stddev: 0.000059516790821108344",
            "extra": "mean: 85.53285465539565 usec\nrounds: 9075"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 119389.97344938887,
            "unit": "iter/sec",
            "range": "stddev: 0.000013081502979798198",
            "extra": "mean: 8.375912742990218 usec\nrounds: 41842"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 13886.47037137078,
            "unit": "iter/sec",
            "range": "stddev: 0.000058375124583735136",
            "extra": "mean: 72.01253977840638 usec\nrounds: 8937"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3846883.147268268,
            "unit": "iter/sec",
            "range": "stddev: 9.310628637636939e-7",
            "extra": "mean: 259.95070859117226 nsec\nrounds: 178572"
          }
        ]
      }
    ]
  }
}