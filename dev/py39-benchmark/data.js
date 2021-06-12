window.BENCHMARK_DATA = {
  "lastUpdate": 1623461342436,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "4eeccc6423fcbccceaca8ddd7f7aa4c1a819581c",
          "message": "Merge pull request #212 from TeoZosa/dependabot/pip/mypy-0.902\n\n⬆️ Bump mypy from 0.901 to 0.902",
          "timestamp": "2021-06-12T01:24:47Z",
          "tree_id": "9c875b0e79311b26a70cf596c6acadee2ae8a73d"
        },
        "date": 1623461341325,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14182.895966636146,
            "unit": "iter/sec",
            "range": "stddev: 0.000011061543037800963",
            "extra": "mean: 70.50746211157444 usec\nrounds: 8327"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5069155.9316034345,
            "unit": "iter/sec",
            "range": "stddev: 8.093181630360594e-9",
            "extra": "mean: 197.27150111234042 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12549.057643799168,
            "unit": "iter/sec",
            "range": "stddev: 0.000018627383335357353",
            "extra": "mean: 79.68725846869683 usec\nrounds: 5904"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 147093.54697479148,
            "unit": "iter/sec",
            "range": "stddev: 3.0841161599553643e-7",
            "extra": "mean: 6.798394766912361 usec\nrounds: 42919"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14618.163661009175,
            "unit": "iter/sec",
            "range": "stddev: 0.000021465954592283646",
            "extra": "mean: 68.40804516830565 usec\nrounds: 14125"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4983484.5278433375,
            "unit": "iter/sec",
            "range": "stddev: 9.189433567005965e-9",
            "extra": "mean: 200.66280820430177 nsec\nrounds: 185186"
          }
        ]
      }
    ]
  }
}